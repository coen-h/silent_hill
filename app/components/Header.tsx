'use client';

import { motion } from 'framer-motion';

export default function Header() {
  const scrollTo = (id) => {
    const target = document.querySelector(id);
    if (window.lenis && target) {
      window.lenis.scrollTo(target, { duration: 1.4 });
    }
  };

  return (
    <motion.div className="fixed top-0 z-30 w-full px-2 flex justify-center">
    <motion.div animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.5 }} className="flex border-x border-b border-neutral-800 bg-black/25 backdrop-blur rounded-b-xl justify-between items-center top-0 z-50 py-2 px-3 max-w-[1600px] w-full opacity-0 blur-xs">
      <button className="hover:opacity-50 transition-opacity cursor-pointer" onClick={() => scrollTo('#hero')}>
        <img className="h-10" src="https://companieslogo.com/img/orig/6BO.SG.D-68bbfc94.png?t=1720244490" />
      </button>
      <div className="flex gap-4">
        <button onClick={() => scrollTo('#concept')} className="hover:text-neutral-500 transition-colors cursor-pointer max-sm:text-sm">Concept</button>
        <button onClick={() => scrollTo('#characters')} className="hover:text-neutral-500 transition-colors cursor-pointer max-sm:text-sm">Characters</button>
        <button onClick={() => scrollTo('#story')} className="hover:text-neutral-500 transition-colors cursor-pointer max-sm:text-sm">Story</button>
        <button onClick={() => scrollTo('#gallery')} className="hover:text-neutral-500 transition-colors cursor-pointer max-sm:text-sm">Gallery</button>
      </div>
    </motion.div>
    </motion.div>
  )
}