import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getAllContacts } from "./_lib/db";

/**
 * GET /api/contacts
 * Retrieve all contact form submissions (admin endpoint)
 *
 * TODO: Add authentication before deploying to production
 * This endpoint exposes all contact submissions and should be protected
 */
export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed"
    });
  }

  try {
    const contacts = await getAllContacts();
    return res.status(200).json({
      success: true,
      data: contacts
    });
  } catch (error) {
    console.error("Failed to fetch contacts:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch contacts"
    });
  }
}
