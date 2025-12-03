'use client';

import Lenis from 'lenis'
import Hero from '@/app/components/Hero';
import Header from '@/app/components/Header';
import Characters from '@/app/components/Characters';

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
      <Characters />
    </div>
  );
}
