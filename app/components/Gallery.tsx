'use client';

import { motion } from 'framer-motion';

export default function Gallery(Odata) {
  const data = Odata.data;

  return (
    <section id="gallery" className="w-screen h-screen relative overflow-hidden">
      <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-t from-30% to-neutral-950" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-linear-to-b from-60% to-neutral-950" />
      <motion.img transition={{ duration: 0.8 }} initial={{ opacity: 0, filter: "blur(8px)", scale: 1.02 }} whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }} viewport={{ once: true, amount: 0.2}} className="h-screen w-screen object-cover" src={data.img} />
    </section>
  )
}