'use client';

import Lenis from 'lenis'
import Hero from '@/app/components/Hero';
import Header from '@/app/components/Header';
import Characters from '@/app/components/Characters';
import Concept from '@/app/components/Concept';
import Story from '@/app/components/Story';
import Gallery from '@/app/components/Gallery';
import Footer from '@/app/components/Footer';

const lenis = new Lenis({
  autoRaf: true,
});

lenis.on('scroll', (e) => {
  console.log(e);
});

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <Hero />
      <Story />
      <Concept />
      <Characters />
      <Gallery />
      <Footer />
    </div>
  );
}
