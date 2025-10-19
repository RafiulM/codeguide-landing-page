import { db } from '@/db';
import { apiKeys } from '@/db/schema/api-keys';
import { eq, and, isNull } from 'drizzle-orm';
import bcrypt from 'bcrypt';

export interface ApiKeyInfo {
    id: string;
    userId: string;
    name: string;
    scopes: any;
    createdAt: Date;
}

/**
 * Verify an API key and return the associated user information
 * @param rawApiKey The raw API key provided in the request
 * @returns The API key information if valid, null otherwise
 */
export async function verifyApiKey(rawApiKey: string): Promise<ApiKeyInfo | null> {
    try {
        // Get all active API keys (we need to check against all of them since we can't query by hashed key)
        const activeKeys = await db
            .select({
                id: apiKeys.id,
                userId: apiKeys.userId,
                name: apiKeys.name,
                hashedKey: apiKeys.hashedKey,
                scopes: apiKeys.scopes,
                createdAt: apiKeys.createdAt,
            })
            .from(apiKeys)
            .where(isNull(apiKeys.revokedAt));

        // Check each key to see if it matches
        for (const key of activeKeys) {
            const isValid = await bcrypt.compare(rawApiKey, key.hashedKey);
            if (isValid) {
                return {
                    id: key.id,
                    userId: key.userId,
                    name: key.name,
                    scopes: key.scopes,
                    createdAt: key.createdAt,
                };
            }
        }

        return null;
    } catch (error) {
        console.error('Error verifying API key:', error);
        return null;
    }
}

/**
 * Generate a cryptographically secure API key
 * @returns A new API key string
 */
export function generateApiKey(): string {
    const crypto = require('crypto');
    return `ck_${crypto.randomBytes(32).toString('hex')}`;
}