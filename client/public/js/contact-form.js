(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', function() {
    var forms = document.querySelectorAll('form[data-contact-form]');
    forms.forEach(function(form) {
      form.addEventListener('submit', handleSubmit);
    });
  });

  function handleSubmit(e) {
    e.preventDefault();
    var form = e.target;
    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    var formData = {
      name: form.querySelector('#name').value.trim(),
      email: form.querySelector('#email').value.trim(),
      message: form.querySelector('#message').value.trim()
    };

    if (!formData.name || !formData.email || !formData.message) {
      showMessage(form, 'Please fill in all fields.', 'error');
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      return;
    }

    if (!isValidEmail(formData.email)) {
      showMessage(form, 'Please enter a valid email address.', 'error');
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      return;
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(function(response) {
      return response.json().then(function(data) {
        return { ok: response.ok, data: data };
      });
    })
    .then(function(result) {
      if (result.ok && result.data.success) {
        showMessage(form, 'Message sent! We\'ll be in touch soon.', 'success');
        form.reset();
      } else {
        showMessage(form, result.data.message || 'Something went wrong. Please try again.', 'error');
      }
    })
    .catch(function(error) {
      console.error('Form submission error:', error);
      showMessage(form, 'Network error. Please check your connection and try again.', 'error');
    })
    .finally(function() {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showMessage(form, message, type) {
    var existing = form.querySelector('.form-message');
    if (existing) existing.remove();

    var msgEl = document.createElement('div');
    msgEl.className = 'form-message form-message-' + type;
    msgEl.textContent = message;
    msgEl.style.cssText = type === 'success'
      ? 'padding: 12px 16px; margin-top: 16px; border-radius: 8px; background: #E8F5E9; color: #2E7D32; font-size: 0.95rem;'
      : 'padding: 12px 16px; margin-top: 16px; border-radius: 8px; background: #FFEBEE; color: #C62828; font-size: 0.95rem;';

    form.appendChild(msgEl);

    if (type === 'success') {
      setTimeout(function() { msgEl.remove(); }, 5000);
    }
  }
})();
