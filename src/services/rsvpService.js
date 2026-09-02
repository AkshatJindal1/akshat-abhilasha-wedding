const ENDPOINT = import.meta.env.VITE_RSVP_ENDPOINT_URL;
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const RECAPTCHA_ACTION = 'rsvp_submit';

// Gets a fresh reCAPTCHA v3 token for this submission. The site key
// is public by design (same category as a Stripe "publishable" key)
// — the actual verification happens server-side in Code.gs using a
// secret key that never reaches the browser.
function getRecaptchaToken(action) {
  return new Promise((resolve, reject) => {
    if (!window.grecaptcha) {
      reject(new Error('Verification script not loaded. Please refresh and try again.'));
      return;
    }
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(RECAPTCHA_SITE_KEY, { action })
        .then(resolve)
        .catch(() => reject(new Error('Verification failed. Please try again.')));
    });
  });
}

// Posts a guest's RSVP straight to the Google Apps Script Web App,
// which appends a row to the RSVP Google Sheet. See
// /apps-script/Code.gs and SETUP.md for the backend side.
export const submitRSVP = async (data) => {
  const recaptchaToken = await getRecaptchaToken(RECAPTCHA_ACTION);

  const payload = {
    recaptchaToken,
    fullName: data.fullName.trim(),
    email: data.email?.trim() || '',
    phone: data.phone?.trim() || '',
    attending: data.attending,
    guestCount: data.attending === 'yes' ? data.guestCount : 0,
    eventsAttending: data.attending === 'yes' ? data.eventsAttending : [],
    message: data.message?.trim() || '',
  };

  let res;
  try {
    res = await fetch(ENDPOINT, {
      method: 'POST',
      // text/plain avoids a CORS preflight against the Apps Script
      // endpoint (which doesn't handle OPTIONS requests). Apps Script
      // still parses e.postData.contents as JSON on its end.
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    throw new Error('Could not reach the server. Please check your connection and try again.');
  }

  const result = await res.json();
  if (!result.success) {
    throw new Error(result.error || 'Something went wrong submitting your RSVP.');
  }
  return result;
};