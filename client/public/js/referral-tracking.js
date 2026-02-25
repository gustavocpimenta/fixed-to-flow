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

  captureReferralParams();
})();
