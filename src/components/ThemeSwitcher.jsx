import React, { useEffect, useState } from 'react';
import { copy } from '../data/copy';

const THEMES = [
  { id: 'midnight', label: 'Midnight', a: '#1b1512', b: '#c9a227' },
  { id: 'light', label: 'Light', a: '#f8f4ec', b: '#9d7531' },
  { id: 'sage', label: 'Muted Green', a: '#1f2a23', b: '#b79d5b' },
  { id: 'teal', label: 'Teal', a: '#142b2d', b: '#c6a458' },
  { id: 'terracotta', label: 'Muted Red', a: '#3f231d', b: '#daA84c' },
  { id: 'rose', label: 'Dusty Rose', a: '#371f27', b: '#cb9760' },
];

const STORAGE_KEY = 'aa-wedding-theme';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState('midnight');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    const initial = THEMES.some(item => item.id === saved) ? saved : 'midnight';
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const selectTheme = (nextTheme) => {
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setOpen(false);
  };

  const active = THEMES.find(item => item.id === theme) || THEMES[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(value => !value)}
        aria-expanded={open}
        aria-label="Choose website theme"
        className="flex items-center gap-2 rounded-full border border-theme-border/60 bg-transparent px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-cream backdrop-blur-md transition-colors hover:bg-white/5"
      >
        <span
          className="theme-swatch h-3 w-3 rounded-full ring-1 ring-white/20"
          style={{ '--swatch-a': active.a, '--swatch-b': active.b }}
        />
        <span className="hidden sm:inline">{copy.themeSwitcher.trigger}</span>
        <span aria-hidden="true" className={`transition-transform ${open ? 'rotate-180' : ''}`}>⌄</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-52 rounded-xl border border-theme-border bg-ink/95 p-2 shadow-2xl backdrop-blur-md">
          <p className="px-2 pb-2 pt-1 text-[9px] ui-caps tracking-[0.25em] text-cream-muted">{copy.themeSwitcher.helper}</p>
          <div className="space-y-1">
            {THEMES.map(item => (
              <button
                key={item.id}
                type="button"
                onClick={() => selectTheme(item.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-2 py-2 text-left text-xs transition-colors hover:bg-ink-soft ${theme === item.id ? 'bg-ink-soft' : ''}`}
              >
                <span
                  className="theme-swatch h-5 w-5 shrink-0 rounded-full ring-1 ring-white/15"
                  style={{ '--swatch-a': item.a, '--swatch-b': item.b }}
                />
                <span className="flex-1 text-cream">{item.label}</span>
                {theme === item.id && <span className="text-gold">✓</span>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
