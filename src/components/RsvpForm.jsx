import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { submitRSVP } from '../services/rsvpService';
import { weddingConfig } from '../data/wedding';

export default function RsvpForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    attending: 'yes',
    guestCount: 1,
    eventsAttending: [],
    dietaryPreferences: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, error: null, success: false });

  const allEvents = weddingConfig.events;

  const handleCheckbox = (title) => {
    setFormData(prev => {
      const exists = prev.eventsAttending.includes(title);
      return {
        ...prev,
        eventsAttending: exists 
          ? prev.eventsAttending.filter(t => t !== title)
          : [...prev.eventsAttending, title]
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      setStatus({ loading: false, error: 'Please enter your name and phone number.', success: false });
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
          <h2 className="font-serif text-3xl sm:text-5xl uppercase tracking-widest mb-3">
            Will You Join Us?
          </h2>
          <p className="font-sans text-xs tracking-[0.2em] text-cream-muted uppercase">
            Kindly respond by October 15, 2026
          </p>
        </div>

        {status.success ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 px-6 bg-theme-input border border-theme-border rounded-sm"
          >
            <h3 className="font-serif text-2xl text-cream mb-2">Thank you.</h3>
            <p className="font-sans text-cream-muted text-sm tracking-wider">
              We can't wait to celebrate with you in Udaipur.
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
              <label className="block text-xs uppercase tracking-widest text-cream-muted mb-2">Full Name *</label>
              <input 
                type="text" 
                required
                value={formData.fullName} 
                onChange={e => setFormData({...formData, fullName: e.target.value})}
                className="w-full bg-theme-input border border-theme-border p-3 text-cream focus:outline-none focus:border-gold text-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-cream-muted mb-2">Phone Number *</label>
              <input 
                type="tel" 
                required
                value={formData.phone} 
                onChange={e => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-theme-input border border-theme-border p-3 text-cream focus:outline-none focus:border-gold text-sm"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-cream-muted mb-2">Attendance</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({...formData, attending: 'yes'})}
                  className={`p-3 text-xs tracking-widest uppercase border transition-colors ${
                    formData.attending === 'yes' ? 'border-gold/80 bg-ink-soft text-white' : 'border-theme-border text-cream-muted'
                  }`}
                >
                  Yes, I'll be there
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({...formData, attending: 'no'})}
                  className={`p-3 text-xs tracking-widest uppercase border transition-colors ${
                    formData.attending === 'no' ? 'border-gold/80 bg-ink-soft text-white' : 'border-theme-border text-cream-muted'
                  }`}
                >
                  Sorry, I can't make it
                </button>
              </div>
            </div>

            {formData.attending === 'yes' && (
              <>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-cream-muted mb-2">Number of Guests</label>
                  <input 
                    type="number" 
                    min="1" 
                    max="10"
                    value={formData.guestCount} 
                    onChange={e => setFormData({...formData, guestCount: parseInt(e.target.value) || 1})}
                    className="w-full bg-theme-input border border-theme-border p-3 text-cream focus:outline-none focus:border-gold text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-cream-muted mb-2">Events Attending</label>
                  <div className="space-y-2">
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

                <div>
                  <label className="block text-xs uppercase tracking-widest text-cream-muted mb-2">Dietary Preferences</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Vegetarian, Jain, Vegan, Allergies"
                    value={formData.dietaryPreferences} 
                    onChange={e => setFormData({...formData, dietaryPreferences: e.target.value})}
                    className="w-full bg-theme-input border border-theme-border p-3 text-cream focus:outline-none focus:border-gold text-sm"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-xs uppercase tracking-widest text-cream-muted mb-2">Message for the Couple</label>
              <textarea 
                rows={3}
                value={formData.message} 
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full bg-theme-input border border-theme-border p-3 text-cream focus:outline-none focus:border-gold text-sm"
              />
            </div>

            <button 
              type="submit" 
              disabled={status.loading}
              className="w-full py-4 bg-cream text-ink font-sans text-xs uppercase tracking-[0.3em] font-semibold hover:bg-ivory-dim transition-colors disabled:opacity-50"
            >
              {status.loading ? 'Submitting...' : 'Submit RSVP'}
            </button>
          </form>
        )}
      </div>
      </section>
  );
}
