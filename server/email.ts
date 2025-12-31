import { Resend } from "resend";
import type { Contact } from "@shared/schema";

// Initialize Resend - will be undefined if no API key (development mode)
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

/**
 * Send contact form notification email to Gus
 * @param contact Contact form data
 * @returns Promise<boolean> indicating success
 */
export async function sendContactEmail(contact: Contact): Promise<boolean> {
  if (!resend) {
    console.warn("Email not configured - RESEND_API_KEY not set. Skipping email send.");
    console.log("Would have sent email for contact:", contact.name, contact.email);
    return true; // Return true to not block form submission in dev
  }

  try {
    const sourcePage = contact.source || "unknown";
    const { data, error } = await resend.emails.send({
      from: "Fixed to Flow <onboarding@resend.dev>",
      to: "gustavo@gustavopimenta.com",
      subject: `[${sourcePage}] New contact from ${contact.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From page:</strong> ${sourcePage}</p>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message.replace(/\n/g, "<br>")}</p>
        <p><strong>Submitted at:</strong> ${new Date(contact.createdAt).toLocaleString()}</p>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return false;
    }

    console.log("Email sent successfully:", data?.id);
    return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
}

/**
 * Check if email configuration is valid
 * @returns Promise<boolean> indicating if email is configured
 */
export async function verifyEmailConfig(): Promise<boolean> {
  if (!process.env.RESEND_API_KEY) {
    console.warn("Email not configured - RESEND_API_KEY not set");
    return false;
  }
  console.log("Email service is ready (Resend)");
  return true;
}
