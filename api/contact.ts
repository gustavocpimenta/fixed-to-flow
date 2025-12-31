import type { VercelRequest, VercelResponse } from "@vercel/node";
import { insertContactSchema } from "./_lib/schema.js";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { createContact } from "./_lib/db.js";
import { sendContactEmail } from "./_lib/email.js";

/**
 * POST /api/contact
 * Handle contact form submissions
 */
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {
    // Validate request body
    const validatedData = insertContactSchema.parse(req.body);

    // Save to database
    const contact = await createContact(validatedData);

    // Send email notification to Gus
    try {
      const emailSent = await sendContactEmail(contact);
      if (emailSent) {
        console.log(`Contact form submission from ${contact.email} sent to gustavo@gustavopimenta.com`);
      } else {
        console.error(`Failed to send email for contact from ${contact.email}`);
      }
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
      // We still return success since we stored the contact in the database
    }

    return res.status(201).json({
      success: true,
      data: contact,
      message: "Contact form submitted successfully"
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const validationError = fromZodError(error);
      return res.status(400).json({
        success: false,
        message: validationError.message
      });
    }

    console.error("Unexpected error:", error);
    // Temporary verbose error for debugging
    const errorMessage = error instanceof Error ? error.message : String(error);
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred",
      debug: errorMessage
    });
  }
}
