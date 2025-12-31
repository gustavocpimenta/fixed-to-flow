import express, { type Express } from "express";
import fs from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import { type Server } from "http";

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  // Serve static files from client/public
  const publicPath = path.resolve(__dirname, "..", "client", "public");

  // Serve static assets
  app.use(express.static(publicPath));

  // For any unknown route, serve index.html (SPA-style fallback)
  app.use("*", (req, res, next) => {
    // Skip API routes
    if (req.originalUrl.startsWith("/api")) {
      return next();
    }

    const requestedFile = path.join(publicPath, req.originalUrl);
    const htmlFile = requestedFile.endsWith(".html") ? requestedFile : `${requestedFile}.html`;

    // Try to serve the exact file or .html version
    if (fs.existsSync(requestedFile) && fs.statSync(requestedFile).isFile()) {
      return res.sendFile(requestedFile);
    }
    if (fs.existsSync(htmlFile)) {
      return res.sendFile(htmlFile);
    }

    // Fallback to index.html
    res.sendFile(path.join(publicPath, "index.html"));
  });
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");

  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // For any unknown route, serve index.html (homepage)
  app.use("*", (req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
