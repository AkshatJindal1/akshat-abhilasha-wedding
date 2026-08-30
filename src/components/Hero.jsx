import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/wedding';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-ink text-cream flex flex-col justify-between p-8 md:p-16">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-65 scale-105 transition-transform duration-10000"
        style={{ backgroundImage: `url(${weddingConfig.images.hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-ink/90" />

      <div className="relative z-10 pt-12" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl mx-auto my-auto"
      >
        <h1 className="font-serif text-5xl sm:text-7xl md:text-9xl tracking-tight uppercase mb-4 text-cream font-light">
          {weddingConfig.couple.groom} <span className="font-serif italic font-normal">&amp;</span> {weddingConfig.couple.bride}
        </h1>
        <div className="h-px w-24 bg-gold/50 mx-auto my-6" />
        <p className="font-sans text-sm md:text-base tracking-[0.3em] text-cream-muted uppercase font-light">
          {weddingConfig.date} &bull; {weddingConfig.venue.city}
        </p>
      </motion.div>

      <div className="relative z-10 flex justify-center pb-4">
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-5 h-9 border border-gold/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
