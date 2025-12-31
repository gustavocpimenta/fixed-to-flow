import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COOKIE_CONSENT_KEY = "ftf_cookie_consent";

type ConsentStatus = "accepted" | "declined" | null;

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentStatus;
    if (!consent) {
      // Small delay before showing banner for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
    // If already accepted, ensure GA is loaded
    if (consent === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowBanner(false);
    loadGoogleAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 right-4 z-50 w-[300px] max-w-[calc(100vw-32px)] bg-white rounded-xl p-4 shadow-[0_4px_6px_rgba(0,0,0,0.04),0_12px_40px_rgba(0,0,0,0.12)]"
        >
          <div className="flex gap-3 mb-3">
            <svg
              className="w-5 h-5 text-[#E63B2E] flex-shrink-0 mt-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
              <path d="M8.5 8.5v.01" />
              <path d="M16 15.5v.01" />
              <path d="M12 12v.01" />
              <path d="M11 17v.01" />
              <path d="M7 14v.01" />
            </svg>
            <p className="text-sm text-[#555555] leading-snug">
              We use cookies to improve your experience.{" "}
              <a
                href="/privacy.html"
                className="text-[#E63B2E] hover:underline"
              >
                Learn more
              </a>
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleDecline}
              className="flex-1 py-2 px-3 rounded-md text-sm font-medium bg-[#FAF7F2] text-[#111111] hover:bg-[#F0EBE3] transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 py-2 px-3 rounded-md text-sm font-medium bg-[#111111] text-[#FAF7F2] hover:bg-[#1A1A1A] transition-colors"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function loadGoogleAnalytics() {
  // Prevent double-loading
  if (document.querySelector('script[src*="googletagmanager"]')) {
    return;
  }

  const GA_ID = "G-98G900VJBV";

  // Load gtag.js script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_ID);
}

// Extend Window interface for dataLayer
declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default CookieBanner;
