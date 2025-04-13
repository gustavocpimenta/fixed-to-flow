import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull().default(new Date().toISOString()),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  message: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

// Example server-side code (using Express.js) to handle contact form submissions.  This needs to be integrated into your existing server.
//  This is a placeholder; adapt to your specific server framework and database connection.

// ... your existing server imports ...
import express from 'express';
import { drizzle } from './db'; // or your database connection method
import { contacts } from './schema'; // import your schema

const app = express();
app.use(express.json());


app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    //Basic validation - expand as needed
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const newContact = await drizzle.insert(contacts).values({ name, email, message }).returning();
    res.status(201).json(newContact);

  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({ error: 'Failed to submit contact' });
  }
});

// ... rest of your server code ...