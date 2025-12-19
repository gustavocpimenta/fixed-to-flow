import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { eq } from "drizzle-orm";
import { contacts, type Contact, type InsertContact } from "../../shared/schema";

// Database connection for Vercel serverless functions
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is required");
}

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql);

/**
 * Create a new contact form submission
 */
export async function createContact(contactData: InsertContact): Promise<Contact> {
  const contact = {
    ...contactData,
    createdAt: new Date().toISOString()
  };
  const result = await db.insert(contacts).values(contact).returning();
  return result[0];
}

/**
 * Get all contact form submissions
 */
export async function getAllContacts(): Promise<Contact[]> {
  const result = await db.select().from(contacts);
  return result;
}
