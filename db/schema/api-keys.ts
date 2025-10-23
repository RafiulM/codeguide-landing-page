import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { user } from "./auth";

export const apiKey = pgTable("api_key", {
    id: uuid("id")
        .defaultRandom()
        .primaryKey(),
    userId: text("user_id")
        .notNull()
        .references(() => user.id, { onDelete: "cascade" }),
    hashedKey: text("hashed_key")
        .notNull()
        .unique(),
    name: text("name")
        .notNull(),
    createdAt: timestamp("created_at")
        .defaultNow()
        .notNull(),
    lastUsedAt: timestamp("last_used_at"),
});