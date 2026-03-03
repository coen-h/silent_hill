'use client';

import { useState, useEffect } from 'react';
import Hero from '@/app/components/Hero';
import Header from '@/app/components/Header';
import Characters from '@/app/components/Characters';
import Concept from '@/app/components/Concept';
import Story from '@/app/components/Story';
import Gallery from '@/app/components/Gallery';
import Footer from '@/app/components/Footer';

const sites = [
  '/sh1.json',
  '/sh2.json',
  '/sh3.json',
  '/sh4.json'
]

export default function Home() {
  const [selectedSite, setSelectedSite] = useState(1);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function loadSite() {
      const res = await fetch(sites[selectedSite]);
      const json = await res.json();
      console.log(json)
      setData(json);
    }

    loadSite();
  }, [selectedSite]);

  if (!data) return null;

  return (
    <div className="flex flex-col items-center">
      <div className='fixed flex items-center right-1 top-1 h-6 w-24 gap-1 px-0.5 bg-black/90 outline outline-white/20 rounded-lg z-50'>
        <div onClick={e => setSelectedSite(0)} className='h-5 w-5 bg-white/40 rounded-lg cursor-pointer'></div>
        <div onClick={e => setSelectedSite(1)} className='h-5 w-5 bg-white/40 rounded-lg cursor-pointer'></div>
        <div onClick={e => setSelectedSite(2)} className='h-5 w-5 bg-white/40 rounded-lg cursor-pointer'></div>
        <div onClick={e => setSelectedSite(3)} className='h-5 w-5 bg-white/40 rounded-lg cursor-pointer'></div>
      </div>
      <Header data={data.header} />
      <Hero data={data.hero} />
      <Concept data={data.concept} />
      <Characters data={data.characters} />
      <Story data={data.story} />
      <Gallery data={data.gallery} />
      <Footer data={data.footer} />
      <div className="fixed inset-0 pointer-events-none bg-linear-to-t from-90% to-red-950/20" />
      <div className="fixed inset-0 pointer-events-none bg-linear-to-b from-90% to-red-950/20" />
      <div className="fixed inset-0 pointer-events-none bg-linear-to-r from-90% to-red-950/20" />
      <div className="fixed inset-0 pointer-events-none bg-linear-to-l from-90% to-red-950/20" />
    </div>
  );
}
