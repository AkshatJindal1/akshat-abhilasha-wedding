import React, { useEffect, useState } from 'react';

const FONTS = [
  { id: 'classic', label: 'Classic Editorial', heading: 'Cinzel', body: 'Plus Jakarta Sans' },
  { id: 'great-vibes', label: 'Great Vibes', heading: 'Great Vibes', body: 'Montserrat' },
  { id: 'pinyon', label: 'Pinyon Script', heading: 'Pinyon Script', body: 'Josefin Sans' },
  { id: 'parisienne', label: 'Parisienne', heading: 'Parisienne', body: 'Montserrat' },
  { id: 'italianno', label: 'Italianno', heading: 'Italianno', body: 'Josefin Sans' },
];

const STORAGE_KEY = 'aa-wedding-font';

export default function FontSwitcher() {
  const [font, setFont] = useState('classic');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const initial = FONTS.some(item => item.id === saved) ? saved : 'classic';
    setFont(initial);
    document.documentElement.dataset.font = initial;
  }, []);

  const selectFont = (nextFont) => {
    setFont(nextFont);
    document.documentElement.dataset.font = nextFont;
    window.localStorage.setItem(STORAGE_KEY, nextFont);
    setOpen(false);
  };

  const active = FONTS.find(item => item.id === font) || FONTS[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(value => !value)}
        aria-expanded={open}
        aria-label="Choose website fonts"
        className="flex items-center gap-2 rounded-full border border-theme-border/60 bg-transparent px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-cream backdrop-blur-md transition-colors hover:bg-white/5"
      >
        <span className="text-xs" aria-hidden="true">Aa</span>
        <span className="hidden sm:inline">{active.label}</span>
        <span aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`}>⌄</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-60 rounded-xl border border-theme-border bg-ink/90 p-2 shadow-2xl backdrop-blur-xl">
          <p className="px-2 pb-2 pt-1 text-[9px] uppercase tracking-[0.25em] text-cream-muted">Try a type direction</p>
          <div className="space-y-1">
            {FONTS.map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => selectFont(item.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-2 py-3 text-left transition-colors hover:bg-white/5 ${font === item.id ? 'bg-white/5' : ''}`}
              >
                <span className="w-7 text-center text-lg text-gold" style={{ fontFamily: `'${item.heading}', serif` }}>Aa</span>
                <span className="flex-1">
                  <span className="block text-xs text-cream" style={{ fontFamily: `'${item.heading}', serif` }}>{item.label}</span>
                  <span className="block text-[9px] tracking-wider text-cream-muted" style={{ fontFamily: `'${item.body}', sans-serif` }}>{item.heading} + {item.body}</span>
                </span>
                {font === item.id && <span className="text-gold">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
