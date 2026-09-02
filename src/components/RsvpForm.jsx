import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitRSVP } from '../services/rsvpService';
import { weddingConfig } from '../data/wedding';
import { copy } from '../data/copy';

export default function RsvpForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    attending: 'yes',
    guestCount: 1,
    eventsAttending: [],
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  const allEvents = weddingConfig.events.filter(evt => evt.displayInRsvp);

  const allEventTitles = allEvents.map(evt => evt.title);

  const handleCheckbox = (title) => {
    setFormData(prev => {
      const isSelected = prev.eventsAttending.includes(title);

      if (title === 'All') {
        // Toggling "All" selects or clears every individual event at once
        return {
          ...prev,
          eventsAttending: isSelected ? [] : ['All', ...allEventTitles],
        };
      }

      let next = isSelected
        ? prev.eventsAttending.filter(t => t !== title)
        : [...prev.eventsAttending, title];

      if (isSelected) {
        // Unchecking any single event means "All" no longer holds true
        next = next.filter(t => t !== 'All');
      } else if (allEventTitles.every(t => next.includes(t))) {
        // Every individual event is now checked — keep "All" in sync
        next = ['All', ...next];
      }

      return { ...prev, eventsAttending: next };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim()) {
      setStatus({ loading: false, error: 'Please enter your name.', success: false });
      return;
    }
    if (!formData.email.trim() && !formData.phone.trim()) {
      setStatus({ loading: false, error: 'Please share an email or phone number so we can reach you.', success: false });
      return;
    }

    setStatus({ loading: true, error: null, success: false });
    try {
      await submitRSVP(formData);
      setStatus({ loading: false, error: null, success: true });
    } catch (err) {
      setStatus({ loading: false, error: err.message || 'Something went wrong.', success: false });
    }
  };

  return (
    <section id="rsvp" className="bg-ink px-6 py-28 text-cream transition-colors duration-300 md:px-12">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-5xl ui-caps tracking-widest mb-3">
            {copy.rsvp.heading}
          </h2>
          <p className="font-sans text-xs tracking-[0.2em] text-cream-muted ui-caps">
            {copy.rsvp.deadline}
          </p>
        </div>

        {status.success ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 px-6 bg-theme-input border border-theme-border rounded-sm"
          >
            <h3 className="font-serif text-2xl text-cream mb-2">{copy.rsvp.success.heading}</h3>
            <p className="font-sans text-cream-muted text-sm tracking-wider">
              {copy.rsvp.success.subtext}
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 font-sans">
            {status.error && (
              <div className="p-3 bg-wine-deep/30 border border-wine text-cream text-xs tracking-wider text-center">
                {status.error}
              </div>
            )}

            <div>
              <label className="block text-xs ui-caps tracking-widest text-cream-muted mb-2">{copy.rsvp.labels.fullName}</label>
              <input
                type="text"
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-theme-input border border-theme-border p-3 text-cream focus:outline-none focus:border-gold text-sm"
              />
            </div>

            <div>
              <label className="block text-xs ui-caps tracking-widest text-cream-muted mb-2">{copy.rsvp.labels.email}</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-theme-input border border-theme-border p-3 text-cream focus:outline-none focus:border-gold text-sm"
              />
            </div>

            <div>
              <label className="block text-xs ui-caps tracking-widest text-cream-muted mb-2">{copy.rsvp.labels.phone}</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-theme-input border border-theme-border p-3 text-cream focus:outline-none focus:border-gold text-sm"
              />
            </div>

            <p className="-mt-4 text-[10px] tracking-wider text-cream-muted">
              Please provide at least an email or a phone number so we can share updates with you.
            </p>

            <div>
              <label className="block text-xs ui-caps tracking-widest text-cream-muted mb-2">{copy.rsvp.labels.attendance}</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: 'yes' })}
                  className={`p-3 text-xs tracking-widest ui-caps border transition-colors ${formData.attending === 'yes' ? 'border-gold/80 bg-ink-soft text-white' : 'border-theme-border text-cream-muted'
                    }`}
                >
                  {copy.rsvp.attendanceOptions.yes}
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, attending: 'no' })}
                  className={`p-3 text-xs tracking-widest ui-caps border transition-colors ${formData.attending === 'no' ? 'border-gold/80 bg-ink-soft text-white' : 'border-theme-border text-cream-muted'
                    }`}
                >
                  {copy.rsvp.attendanceOptions.no}
                </button>
              </div>
            </div>

            {formData.attending === 'yes' && (
              <>
                <div>
                  <label className="block text-xs ui-caps tracking-widest text-cream-muted mb-2">{copy.rsvp.labels.guestCount}</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={formData.guestCount}
                    onChange={e => setFormData({ ...formData, guestCount: parseInt(e.target.value) || 1 })}
                    className="w-full bg-theme-input border border-theme-border p-3 text-cream focus:outline-none focus:border-gold text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs ui-caps tracking-widest text-cream-muted mb-2">{copy.rsvp.labels.eventsAttending}</label>
                  <div className="space-y-2">
                    <label key="all" className="flex items-center gap-3 text-xs tracking-wider text-cream-muted cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.eventsAttending.includes("All")}
                        onChange={() => handleCheckbox("All")}
                        className="accent-gold"
                      />
                      All Events
                    </label>
                    {allEvents.map((evt) => (
                      <label key={evt.id} className="flex items-center gap-3 text-xs tracking-wider text-cream-muted cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.eventsAttending.includes(evt.title)}
                          onChange={() => handleCheckbox(evt.title)}
                          className="accent-gold"
                        />
                        {evt.title}
                      </label>
                    ))}
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-xs ui-caps tracking-widest text-cream-muted mb-2">{copy.rsvp.labels.message}</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-theme-input border border-theme-border p-3 text-cream focus:outline-none focus:border-gold text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={status.loading}
              className="w-full py-4 bg-cream text-ink font-sans text-xs ui-caps tracking-[0.3em] font-semibold hover:bg-ivory-dim transition-colors disabled:opacity-50"
            >
              {status.loading ? copy.rsvp.submit.loading : copy.rsvp.submit.idle}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
