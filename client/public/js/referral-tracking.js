(function() {
  'use strict';

  var STORAGE_KEY = 'ftf_referral';
  var TRACKED_PARAMS = ['ref', 'utm_source', 'utm_medium', 'utm_campaign'];

  function captureReferralParams() {
    var params = new URLSearchParams(window.location.search);
    var referralData = {};
    var hasNewParams = false;

    TRACKED_PARAMS.forEach(function(key) {
      var value = params.get(key);
      if (value) {
        referralData[key] = value;
        hasNewParams = true;
      }
    });

    if (hasNewParams) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(referralData));
    }
  }

  window.FTFReferral = {
    getData: function() {
      try {
        var stored = sessionStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : null;
      } catch (e) {
        return null;
      }
    }
  };

  function tagCalendlyLinks() {
    var data = window.FTFReferral.getData();
    if (!data || !data.ref) return;

    var links = document.querySelectorAll('a[href*="calendly.com"]');
    links.forEach(function(link) {
      var url = new URL(link.href);
      url.searchParams.set('utm_source', data.ref);
      if (data.utm_medium) url.searchParams.set('utm_medium', data.utm_medium);
      if (data.utm_campaign) url.searchParams.set('utm_campaign', data.utm_campaign);
      link.href = url.toString();
    });
  }

  captureReferralParams();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tagCalendlyLinks);
  } else {
    tagCalendlyLinks();
  }
})();
