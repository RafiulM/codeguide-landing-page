import { pgTable, text, timestamp, jsonb, uuid } from "drizzle-orm/pg-core";
import { user } from "./auth";

export const apiKeys = pgTable("api_keys", {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: text("user_id")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
    name: text("name").notNull(),
    hashedKey: text("hashed_key").notNull().unique(),
    scopes: jsonb("scopes"),
    createdAt: timestamp("created_at")
        .defaultNow()
        .notNull(),
    revokedAt: timestamp("revoked_at"),
});