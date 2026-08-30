import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import UdaipurIntro from './components/UdaipurIntro';
import EventStory from './components/EventStory';
import CoupleGallery from './components/CoupleGallery';
import RsvpForm from './components/RsvpForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-ink text-cream font-sans selection:bg-gold selection:text-ink">
      <Navigation />
      <main>
        <Hero />
        <UdaipurIntro />
        <EventStory />
        <RsvpForm />
        <CoupleGallery />
      </main>
      <Footer />
    </div>
  );
}
