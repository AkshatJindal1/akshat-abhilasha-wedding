import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/wedding';
import { copy } from '../data/copy';

const ACCENTS = {
  turmeric: { text: 'text-gold', chip: 'bg-gold/15 text-gold', rule: 'bg-gold', dot: 'bg-gold' },
  wine: { text: 'text-wine', chip: 'bg-wine/10 text-wine', rule: 'bg-wine', dot: 'bg-wine' },
  magenta: { text: 'text-wine', chip: 'bg-wine/15 text-wine', rule: 'bg-wine', dot: 'bg-wine' },
  sunset: { text: 'text-gold-soft', chip: 'bg-gold/15 text-gold-soft', rule: 'bg-gold-soft', dot: 'bg-gold-soft' },
};

function EventBlock({ evt, index, total, reverse, registerRef }) {
  const isNight = evt.mode === 'night';
  const isSundowner = evt.mode === 'sundowner';
  const accent = ACCENTS[evt.accent] || ACCENTS.turmeric;
  const ref = useRef(null);
  const sectionClass = isNight ? 'bg-theme-night text-cream' : isSundowner ? 'bg-theme-sundowner text-cream' : 'bg-theme-day text-umber';

  useEffect(() => {
    registerRef(evt.id, ref.current);
  }, [evt.id, registerRef]);

  return (
    <div id={`event-${evt.id}`} ref={ref} className={`relative w-full ${sectionClass}`}>
      <div className={`mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 ${reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.9 }}
          className="relative h-[45vh] overflow-hidden md:h-[85vh]"
        >
          <img
            src={evt.bgImage}
            alt={evt.title}
            className={`h-full w-full object-cover ${isNight ? 'brightness-[0.55]' : ''}`}
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col justify-center px-8 py-16 md:px-16 md:py-0"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className={`rounded-full px-3 py-1 font-sans text-[11px] font-medium tracking-[0.3em] ${accent.chip}`}>
              {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <span className={`h-px flex-1 ${accent.rule} opacity-40`} />
          </div>

          <div className="mb-2 flex items-center gap-2">
            <span className="text-base leading-none" role="img" aria-label={evt.title}>{evt.emoji}</span>
            <span className="block text-[11px] ui-caps tracking-[0.25em] opacity-60">{evt.displayDate}</span>
          </div>
          <h4 className="mb-4 font-serif text-4xl tracking-wide sm:text-5xl md:text-6xl">{evt.title}</h4>
          <p className="mb-8 max-w-sm font-sans text-sm leading-relaxed opacity-75 md:text-base">{evt.description}</p>

          <div className="flex flex-wrap gap-x-10 gap-y-4">
            <div>
              <span className="mb-1 block text-[10px] ui-caps tracking-[0.25em] opacity-50">Time</span>
              <span className={`font-serif text-lg font-medium ${accent.text}`}>{evt.time}</span>
            </div>
            {evt.dressCode && (
              <div>
                <span className="mb-1 block text-[10px] ui-caps tracking-[0.25em] opacity-50">Dress Code</span>
                <span className={`font-serif text-lg italic font-medium ${accent.text}`}>{evt.dressCode}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function EventStory() {
  const events = weddingConfig.events;
  const [activeId, setActiveId] = useState(events[0]?.id);
  const [railVisible, setRailVisible] = useState(false);
  const nodeMap = useRef({});

  const registerRef = (id, node) => {
    if (node) nodeMap.current[id] = node;
  };

  useEffect(() => {
    const nodes = Object.entries(nodeMap.current);
    if (!nodes.length) return;

    const activeObserver = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) {
          const match = nodes.find(([, node]) => node === entry.target);
          if (match) setActiveId(match[0]);
        }
      }),
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    const visibilityObserver = new IntersectionObserver(
      entries => {
        const anyVisible = entries.some(e => e.isIntersecting);
        if (anyVisible) setRailVisible(true);
        else setRailVisible(nodes.some(([, node]) => node.getBoundingClientRect().top < window.innerHeight && node.getBoundingClientRect().bottom > 0));
      },
      { threshold: 0 }
    );

    nodes.forEach(([, node]) => {
      activeObserver.observe(node);
      visibilityObserver.observe(node);
    });

    return () => {
      activeObserver.disconnect();
      visibilityObserver.disconnect();
    };
  }, []);

  return (
    <section id="events" className="relative w-full">
      <div className="bg-ink-deep px-6 py-14 text-center text-cream transition-colors duration-300 md:py-20">
        <span className="mb-2 block text-xs ui-caps tracking-[0.35em] text-gold/80">{copy.events.eyebrow}</span>
        <h3 className="font-serif text-3xl tracking-wide sm:text-5xl">The Days We've Been Waiting For</h3>
      </div>

      <div className={`fixed right-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 transition-opacity duration-300 lg:flex ${railVisible ? 'opacity-100' : 'pointer-events-none opacity-0'}`}>
        {events.map(evt => {
          const accent = ACCENTS[evt.accent] || ACCENTS.turmeric;
          const isActive = evt.id === activeId;
          return (
            <a key={evt.id} href={`#event-${evt.id}`} className="group flex items-center justify-end gap-2" aria-label={evt.title}>
              <span className={`font-sans text-[10px] ui-caps tracking-[0.2em] transition-opacity ${isActive ? 'text-cream opacity-100' : 'text-cream opacity-0 group-hover:opacity-70'}`}>
                {evt.title}
              </span>
              <span className={`rounded-full transition-all ${accent.dot} ${isActive ? 'h-3 w-3 opacity-100' : 'h-2 w-2 opacity-50'}`} />
            </a>
          );
        })}
      </div>

      {events.map((evt, idx) => (
        <EventBlock key={evt.id} evt={evt} index={idx} total={events.length} reverse={idx % 2 === 1} registerRef={registerRef} />
      ))}

    </section>
  );
}
