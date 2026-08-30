# Akshat & Abhilasha — Wedding Website

A production-quality, mobile-first luxury wedding invitation website for Akshat & Abhilasha (24–25 November 2026 at Yaan, Udaipur).

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run local development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Key Configuration Locations

- **Wedding Data & Images**: Edit `src/data/wedding.ts`
- **RSVP Backend Connection**: Update `src/services/rsvpService.js` to connect to Firebase, Supabase, Google Sheets, or a custom API endpoint.
- **Custom Images**: Replace placeholder images by saving your photos inside `public/images/` and updating references in `src/data/wedding.ts`.
