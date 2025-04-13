import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendContactEmail, verifyEmailConfig } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Check email configuration on startup
  verifyEmailConfig().then(isConfigured => {
    if (isConfigured) {
      console.log("Email service configured successfully");
    } else {
      console.warn("Email service not configured. Contact form will store submissions but not send emails.");
    }
  });

  // API routes with /api prefix
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Send email to gustavo@gustavopimenta.com
      try {
        await sendContactEmail(contact);
        console.log(`Contact form submission from ${contact.email} sent to gustavo@gustavopimenta.com`);
      } catch (emailError) {
        console.error("Failed to send email notification:", emailError);
        // We still return success since we stored the contact in the database
      }
      
      res.status(201).json({ 
        success: true, 
        data: contact,
        message: "Contact form submitted successfully" 
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({ 
          success: false, 
          message: validationError.message 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "An unexpected error occurred" 
        });
      }
    }
  });

  // Get all contacts (for admin purposes)
  app.get("/api/contacts", async (req: Request, res: Response) => {
    try {
      const contacts = await storage.getAllContacts();
      res.status(200).json({ 
        success: true, 
        data: contacts 
      });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Failed to fetch contacts" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}