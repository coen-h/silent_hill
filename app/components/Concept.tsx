'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Concept(Odata: {data: {videos: string[]}}) {
  const data = Odata.data;
  const [index, setIndex] = useState(0);
  const videos = data.videos;

  return (
    <section id="concept" className="relative h-screen w-screen overflow-hidden">
      <motion.div className="flex h-full" animate={{ x: `-${index * 100}vw` }} transition={{ type: 'spring', stiffness: 80, damping: 20 }}>
        {videos.map((src, i) => (
          <div key={i} className="w-screen h-screen shrink-0 relative">
            <video src={src} className="h-full w-full object-cover" autoPlay muted loop playsInline />
          </div>
        ))}
      </motion.div>
      
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b to-neutral-950" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-50% to-neutral-950" />

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {videos.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`h-2 w-8 rounded-full cursor-pointer ${ i === index ? 'bg-white' : 'bg-white/40'}`} />
        ))}
      </div>
    </section>
  );
}