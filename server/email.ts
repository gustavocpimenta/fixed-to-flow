import nodemailer from "nodemailer";
import type { Contact } from "@shared/schema";

// Setup email transport
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || "",
    pass: process.env.EMAIL_PASSWORD || "",
  },
});

/**
 * Send contact form email
 * @param contact Contact form data
 * @returns Promise<boolean> indicating success
 */
export async function sendContactEmail(contact: Contact): Promise<boolean> {
  try {
    // Email to Gustavo
    const info = await transporter.sendMail({
      from: `"Fixed to Flow Website" <${process.env.EMAIL_USER || "noreply@fixedtoflow.com"}>`,
      to: "gustavo@gustavopimenta.com",
      subject: `New contact form submission from ${contact.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Email:</strong> ${contact.email}</p>
        <p><strong>Message:</strong></p>
        <p>${contact.message.replace(/\n/g, "<br>")}</p>
        <p><strong>Submitted at:</strong> ${new Date(contact.createdAt).toLocaleString()}</p>
      `,
    });

    console.log("Message sent: %s", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

/**
 * Check if email configuration is valid
 * @returns Promise<boolean> indicating if email is configured
 */
export async function verifyEmailConfig(): Promise<boolean> {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.warn("Email credentials not configured");
      return false;
    }
    
    // Verify connection configuration
    await transporter.verify();
    console.log("Email service is ready");
    return true;
  } catch (error) {
    console.error("Email configuration error:", error);
    return false;
  }
}