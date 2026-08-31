import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/wedding';
import { copy } from '../data/copy';

function MapPin() {
  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M20 10.2c0 5.3-8 11.3-8 11.3S4 15.5 4 10.2a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    </span>
  );
}

export default function UdaipurIntro() {
  return (
    <section id="destination" className="relative w-full overflow-hidden bg-ink px-6 py-28 text-cream transition-colors duration-300 md:px-16 md:py-40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="z-10 md:col-span-5"
        >
          <span className="text-xs ui-caps tracking-[0.3em] text-gold/80">{copy.destination.eyebrow}</span>
          <h2 className="my-4 font-serif text-4xl ui-caps tracking-wider sm:text-6xl">Udaipur</h2>
          <p className="mb-7 font-sans text-sm ui-caps tracking-widest text-cream-muted">{copy.destination.tagline}</p>

          <div className="flex items-center gap-4 border-t border-theme-border/60 pt-6">
            <MapPin />
            <div>
              <h3 className="font-serif text-xl ui-caps tracking-wider sm:text-2xl">{weddingConfig.venue.name}</h3>
              <span className="text-xs text-cream-muted">{weddingConfig.venue.city}, {weddingConfig.venue.state}</span>
            </div>
          </div>

          <a
            href={weddingConfig.venue.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 border-b border-gold/40 pb-1 font-sans text-xs ui-caps tracking-[0.2em] text-gold transition-colors hover:border-gold"
          >
            {copy.destination.mapLink}<span aria-hidden="true">↗</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 md:col-span-7 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="h-64 w-full overflow-hidden rounded-t-full sm:h-96"
          >
            <img src={weddingConfig.images.udaipurIntro[0]} alt="Udaipur Palace Architecture" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 h-64 w-full overflow-hidden rounded-b-full sm:h-96"
          >
            <img src={weddingConfig.images.udaipurIntro[1]} alt="Lake Pichola Reflection" className="h-full w-full object-cover" loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
