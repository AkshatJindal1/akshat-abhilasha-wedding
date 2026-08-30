import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/wedding';

// CSS columns give a Pinterest-style flow using each image's natural
// aspect ratio (set via width/height in the source URLs). A small negative
// top margin on alternating tiles creates the "slight overlap" feel
// without the layout risk of grid row-spans.
function GalleryGroup({ group, groupIndex }) {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: '-100px' }}
        transition={{ duration: 0.7 }}
        className="flex items-baseline gap-4 mb-8 md:mb-10"
      >
        <span className="font-serif text-3xl text-gold/70">{String(groupIndex + 1).padStart(2, '0')}</span>
        <div>
          <h4 className="font-serif text-2xl md:text-3xl tracking-wide text-cream">{group.label}</h4>
          <span className="text-[11px] tracking-[0.25em] uppercase text-cream-muted">{group.caption}</span>
        </div>
      </motion.div>

      <div className="columns-2 md:columns-4 gap-4 md:gap-6">
        {group.images.map((src, i) => (
          <motion.div
            key={src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-60px' }}
            transition={{ duration: 0.7, delay: (i % 4) * 0.08 }}
            className={`mb-4 md:mb-6 break-inside-avoid overflow-hidden rounded-sm relative ${
              i % 3 === 1 ? '-mt-6 md:-mt-10' : ''
            }`}
            style={{ zIndex: i % 3 === 1 ? 2 : 1 }}
          >
            <img
              src={src}
              alt={`${group.label} ${i + 1}`}
              className="w-full h-auto block  transition-all duration-700 hover:scale-105"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function CoupleGallery() {
  const groups = weddingConfig.galleryGroups;

  return (
    <>
      <section id="gallery" className="bg-ink-soft px-6 py-24 text-cream transition-colors duration-300 md:px-12 md:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-xs tracking-[0.35em] uppercase text-gold/80 block mb-2">Moments</span>
            <h3 className="font-serif text-3xl sm:text-5xl tracking-wide">A Little of Our Story</h3>
          </div>

          <div className="space-y-20 md:space-y-28">
            {groups.map((group, i) => (
              <GalleryGroup key={group.label} group={group} groupIndex={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
