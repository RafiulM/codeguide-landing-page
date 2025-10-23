"use server";

import { auth } from "@/lib/auth";
import { db } from "@/db";
import { apiKey } from "@/db/schema/api-keys";
import { randomBytes } from "crypto";
import { hash } from "bcrypt";
import { eq, and } from "drizzle-orm";

const SALT_ROUNDS = 12;
const API_KEY_PREFIX = "api_";
const API_KEY_LENGTH = 32;

/**
 * Generates a secure random API key
 */
function generateApiKey(): string {
  const randomPart = randomBytes(API_KEY_LENGTH).toString('hex');
  return `${API_KEY_PREFIX}${randomPart}`;
}

/**
 * Creates a new API key for the authenticated user
 * Returns the plain key for one-time display
 */
export async function createApiKey(name: string) {
  try {
    const session = await auth.api.getSession({
      headers: new Headers(),
    });

    if (!session?.user?.id) {
      throw new Error("Unauthorized: No valid session found");
    }

    // Generate the API key
    const plainKey = generateApiKey();

    // Hash the key for storage
    const hashedKey = await hash(plainKey, SALT_ROUNDS);

    // Store in database
    const result = await db.insert(apiKey).values({
      userId: session.user.id,
      hashedKey,
      name: name.trim(),
    }).returning({ id: apiKey.id, createdAt: apiKey.createdAt });

    if (result.length === 0) {
      throw new Error("Failed to create API key");
    }

    // Log the creation for audit purposes (in production, you'd want proper logging)
    console.log(`API key created for user ${session.user.id}, name: ${name}, id: ${result[0].id}`);

    return {
      success: true,
      key: plainKey, // Return plain key for one-time display
      id: result[0].id,
      createdAt: result[0].createdAt,
    };
  } catch (error) {
    console.error("Error creating API key:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to create API key",
    };
  }
}

/**
 * Gets all API keys for the current user (excluding the plain keys)
 */
export async function getApiKeysForUser() {
  try {
    const session = await auth.api.getSession({
      headers: new Headers(),
    });

    if (!session?.user?.id) {
      throw new Error("Unauthorized: No valid session found");
    }

    const userApiKeys = await db
      .select({
        id: apiKey.id,
        name: apiKey.name,
        createdAt: apiKey.createdAt,
        lastUsedAt: apiKey.lastUsedAt,
        // Include first 8 characters of hashed key for identification (safe to expose)
        keyPreview: apiKey.hashedKey,
      })
      .from(apiKey)
      .where(eq(apiKey.userId, session.user.id))
      .orderBy(apiKey.createdAt);

    return {
      success: true,
      keys: userApiKeys.map(key => ({
        ...key,
        // Create a partial key identifier for display (show first 8 chars of a consistent format)
        partialKey: `api_${key.keyPreview.substring(0, 8)}...`,
      })),
    };
  } catch (error) {
    console.error("Error fetching API keys:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to fetch API keys",
    };
  }
}

/**
 * Revokes (deletes) an API key for the current user
 */
export async function revokeApiKey(keyId: string) {
  try {
    const session = await auth.api.getSession({
      headers: new Headers(),
    });

    if (!session?.user?.id) {
      throw new Error("Unauthorized: No valid session found");
    }

    // Delete the key ensuring it belongs to the current user
    const result = await db
      .delete(apiKey)
      .where(and(
        eq(apiKey.id, keyId),
        eq(apiKey.userId, session.user.id)
      ))
      .returning({ id: apiKey.id });

    if (result.length === 0) {
      throw new Error("API key not found or access denied");
    }

    // Log the revocation for audit purposes
    console.log(`API key revoked for user ${session.user.id}, id: ${keyId}`);

    return {
      success: true,
      message: "API key revoked successfully",
    };
  } catch (error) {
    console.error("Error revoking API key:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to revoke API key",
    };
  }
}

/**
 * Updates the last used timestamp for an API key
 * This would typically be called when the API key is used in API requests
 */
export async function updateLastUsed(keyId: string) {
  try {
    const result = await db
      .update(apiKey)
      .set({ lastUsedAt: new Date() })
      .where(eq(apiKey.id, keyId))
      .returning({ id: apiKey.id });

    return result.length > 0;
  } catch (error) {
    console.error("Error updating last used timestamp:", error);
    return false;
  }
}