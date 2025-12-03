'use client';

import Hero from '@/app/components/Hero';
import Header from '@/app/components/Header';
import Characters from '@/app/components/Characters';
import Concept from '@/app/components/Concept';
import Story from '@/app/components/Story';
import Gallery from '@/app/components/Gallery';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      
      <Header />
      <Hero />
      <Story />
      <Characters />
      <Concept />
      
      <Gallery />
      <Footer />
      <div className="fixed inset-0 pointer-events-none bg-linear-to-t from-90% to-red-950/20" />
      <div className="fixed inset-0 pointer-events-none bg-linear-to-b from-90% to-red-950/20" />
      <div className="fixed inset-0 pointer-events-none bg-linear-to-r from-90% to-red-950/20" />
      <div className="fixed inset-0 pointer-events-none bg-linear-to-l from-90% to-red-950/20" />
    </div>
  );
}
