(function() {
  'use strict';

  var COOKIE_KEY = 'ftf_cookie_consent';
  var GA_ID = 'G-98G900VJBV';

  document.addEventListener('DOMContentLoaded', function() {
    var consent = localStorage.getItem(COOKIE_KEY);
    if (consent === 'accepted') {
      loadGoogleAnalytics();
    } else if (!consent) {
      setTimeout(showBanner, 1000);
    }
  });

  function showBanner() {
    var banner = document.createElement('div');
    banner.id = 'cookie-banner';
    banner.innerHTML =
      '<div style="display: flex; gap: 12px; margin-bottom: 12px;">' +
        '<svg style="width: 20px; height: 20px; color: #E63B2E; flex-shrink: 0; margin-top: 2px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"/>' +
          '<path d="M8.5 8.5v.01"/><path d="M16 15.5v.01"/><path d="M12 12v.01"/><path d="M11 17v.01"/><path d="M7 14v.01"/>' +
        '</svg>' +
        '<p style="font-size: 14px; color: #555555; line-height: 1.5; margin: 0;">We use cookies to improve your experience. <a href="/privacy.html" style="color: #E63B2E; text-decoration: none;">Learn more</a></p>' +
      '</div>' +
      '<div style="display: flex; gap: 8px;">' +
        '<button id="cookie-decline" style="flex: 1; padding: 8px 16px; border-radius: 6px; font-size: 14px; font-weight: 500; background: #FAF7F2; color: #111111; border: 1px solid #ddd; cursor: pointer;">Decline</button>' +
        '<button id="cookie-accept" style="flex: 1; padding: 8px 16px; border-radius: 6px; font-size: 14px; font-weight: 500; background: #111111; color: #FAF7F2; border: none; cursor: pointer;">Accept</button>' +
      '</div>';

    banner.style.cssText = 'position: fixed; bottom: 16px; right: 16px; z-index: 9999; width: 300px; max-width: calc(100vw - 32px); background: white; border-radius: 12px; padding: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.04), 0 12px 40px rgba(0,0,0,0.12); font-family: Outfit, sans-serif; animation: cookieSlideIn 0.3s ease-out;';

    var style = document.createElement('style');
    style.textContent = '@keyframes cookieSlideIn { from { opacity: 0; transform: translateX(100px); } to { opacity: 1; transform: translateX(0); } }';
    document.head.appendChild(style);

    document.body.appendChild(banner);

    document.getElementById('cookie-accept').addEventListener('click', function() {
      localStorage.setItem(COOKIE_KEY, 'accepted');
      banner.remove();
      loadGoogleAnalytics();
    });

    document.getElementById('cookie-decline').addEventListener('click', function() {
      localStorage.setItem(COOKIE_KEY, 'declined');
      banner.remove();
    });
  }

  function loadGoogleAnalytics() {
    if (document.querySelector('script[src*="googletagmanager"]')) return;

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', GA_ID);
  }
})();
