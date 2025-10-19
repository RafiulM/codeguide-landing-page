import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { db } from '@/db';
import { apiKeys } from '@/db/schema/api-keys';
import { eq, and, isNull } from 'drizzle-orm';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

// GET /api/keys - List all API keys for the authenticated user
export async function GET(request: NextRequest) {
    try {
        const session = await auth.api.getSession({
            headers: request.headers,
        });

        if (!session?.user?.id) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const userApiKeys = await db
            .select({
                id: apiKeys.id,
                name: apiKeys.name,
                scopes: apiKeys.scopes,
                createdAt: apiKeys.createdAt,
                revokedAt: apiKeys.revokedAt,
            })
            .from(apiKeys)
            .where(
                and(
                    eq(apiKeys.userId, session.user.id),
                    isNull(apiKeys.revokedAt)
                )
            );

        return NextResponse.json({ keys: userApiKeys });
    } catch (error) {
        console.error('Error fetching API keys:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}

// POST /api/keys - Create a new API key
export async function POST(request: NextRequest) {
    try {
        const session = await auth.api.getSession({
            headers: request.headers,
        });

        if (!session?.user?.id) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { name, scopes } = body;

        if (!name || typeof name !== 'string') {
            return NextResponse.json(
                { error: 'Name is required' },
                { status: 400 }
            );
        }

        // Generate a cryptographically secure API key
        const rawKey = `ck_${crypto.randomBytes(32).toString('hex')}`;
        
        // Hash the API key for storage
        const saltRounds = 10;
        const hashedKey = await bcrypt.hash(rawKey, saltRounds);

        // Store the API key
        const [newApiKey] = await db
            .insert(apiKeys)
            .values({
                userId: session.user.id,
                name,
                hashedKey,
                scopes: scopes || null,
            })
            .returning({
                id: apiKeys.id,
                name: apiKeys.name,
                scopes: apiKeys.scopes,
                createdAt: apiKeys.createdAt,
            });

        // Return the raw key only once
        return NextResponse.json({
            apiKey: newApiKey,
            key: rawKey, // Only return the raw key on creation
        });
    } catch (error) {
        console.error('Error creating API key:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}