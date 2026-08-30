import React from 'react';
import { weddingConfig } from '../data/wedding';

export default function Footer() {
  return (
      <footer className="relative py-20 bg-ink-deep text-cream-muted text-center px-6 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${weddingConfig.images.footer})` }}
        />
        <div className="relative z-10 space-y-4">
          <h2 className="font-serif text-3xl sm:text-4xl uppercase tracking-widest text-cream">
            {weddingConfig.couple.title}
          </h2>
          <p className="font-sans text-xs tracking-[0.25em] uppercase">
            {weddingConfig.date} &bull; {weddingConfig.venue.name}, {weddingConfig.venue.city}
          </p>
        </div>
      </footer>
  );
}
