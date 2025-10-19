import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { db } from '@/db';
import { apiKeys } from '@/db/schema/api-keys';
import { eq, and, isNull } from 'drizzle-orm';

// DELETE /api/keys/[keyId] - Revoke an API key
export async function DELETE(
    request: NextRequest,
    { params }: { params: { keyId: string } }
) {
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

        const { keyId } = params;

        // Soft delete the API key by setting revokedAt
        const result = await db
            .update(apiKeys)
            .set({ revokedAt: new Date() })
            .where(
                and(
                    eq(apiKeys.id, keyId),
                    eq(apiKeys.userId, session.user.id),
                    isNull(apiKeys.revokedAt)
                )
            )
            .returning({ id: apiKeys.id });

        if (result.length === 0) {
            return NextResponse.json(
                { error: 'API key not found or already revoked' },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: 'API key revoked successfully' });
    } catch (error) {
        console.error('Error revoking API key:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}