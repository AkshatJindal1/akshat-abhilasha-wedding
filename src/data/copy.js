// Centralized copy for every string currently styled with all-caps
// treatment. Casing itself is handled by CSS via the `ui-caps` class —
// this file only owns the words.
export const copy = {
  nav: {
    brand: "A & A",
    links: { events: "Events", rsvp: "RSVP", gallery: "Moments" },
  },
  destination: {
    eyebrow: "The Destination",
    tagline: "Where the celebration begins.",
    mapLink: "View location on Maps",
  },
  events: {
    eyebrow: "The Celebrations",
    timeLabel: "Time",
    dressCodeLabel: "Dress Code",
  },
  rsvp: {
    heading: "Will You Join Us?",
    deadline: "Kindly respond by October 15, 2026",
    labels: {
      fullName: "Full Name *",
      email: "Email Address",
      phone: "Phone Number",
      attendance: "Attendance",
      guestCount: "Number of Guests",
      eventsAttending: "Events Attending",
      dietary: "Dietary Preferences",
      message: "Message for the Couple",
    },
    attendanceOptions: {
      yes: "Yes, I'll be there",
      no: "Sorry, I can't make it",
    },
    submit: { idle: "Submit RSVP", loading: "Submitting..." },
    success: {
      heading: "Thank you!",
      subtext: "We can't wait to celebrate with you in Udaipur.",
    }
  },
  themeSwitcher: { trigger: "Theme", helper: "Try a colour direction" },
  fontSwitcher: { helper: "Try a type direction" },
};
