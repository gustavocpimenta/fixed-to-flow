import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { contacts, type Contact, type InsertContact } from "./schema.js";

// Lazy initialization to avoid cold start issues in Vercel serverless
let db: ReturnType<typeof drizzle> | null = null;

function getDb() {
  if (!db) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is required");
    }
    const sql = neon(process.env.DATABASE_URL);
    db = drizzle(sql);
  }
  return db;
}

/**
 * Create a new contact form submission
 */
export async function createContact(contactData: InsertContact): Promise<Contact> {
  const contact = {
    ...contactData,
    createdAt: new Date().toISOString()
  };
  const result = await getDb().insert(contacts).values(contact).returning();
  return result[0];
}

/**
 * Get all contact form submissions
 */
export async function getAllContacts(): Promise<Contact[]> {
  const result = await getDb().select().from(contacts);
  return result;
}
