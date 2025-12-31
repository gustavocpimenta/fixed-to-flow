import { Resend } from "resend";
import type { Contact } from "./schema.js";

// Lazy initialization to avoid cold start issues in Vercel serverless
let resend: Resend | null = null;

function getResend(): Resend {
  if (!resend) {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY environment variable is required");
    }
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

/**
 * Send contact form notification email to Gus
 * @param contact Contact form data
 * @returns Promise<boolean> indicating success
 */
export async function sendContactEmail(contact: Contact): Promise<boolean> {
  try {
    const sourcePage = contact.source || "unknown";
    const { data, error } = await getResend().emails.send({
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
