import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import FontSwitcher from './FontSwitcher';

export default function Navigation() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between px-5 py-4 text-cream backdrop-blur-md transition-colors duration-300 md:px-10 md:py-6">
      <button
        type="button"
        onClick={() => scrollTo('top')}
        className="font-serif text-lg uppercase tracking-widest transition-colors hover:text-gold"
      >
        A &amp; A
      </button>
      <div className="flex items-center gap-2 md:gap-4">
        <div className="flex gap-3 font-sans text-[9px] uppercase tracking-[0.16em] md:gap-8 md:text-xs md:tracking-[0.2em]">
          <button onClick={() => scrollTo('events')} className="transition-colors hover:text-gold">Events</button>
          <button onClick={() => scrollTo('rsvp')} className="transition-colors hover:text-gold">RSVP</button>
          <button onClick={() => scrollTo('gallery')} className="transition-colors hover:text-gold">Moments</button>
        </div>
        <ThemeSwitcher />
        <FontSwitcher />
      </div>
    </nav>
  );
}
