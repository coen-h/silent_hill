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
        <motion.button transition={{ duration: 0.6 }} initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} onClick={() => scrollTo('#concept')} className="hover:text-neutral-500 transition-colors cursor-pointer max-sm:text-sm">Concept</motion.button>
        <motion.button transition={{ duration: 0.6, delay: 0.2 }} initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} onClick={() => scrollTo('#characters')} className="hover:text-neutral-500 transition-colors cursor-pointer max-sm:text-sm">Characters</motion.button>
        <motion.button transition={{ duration: 0.6, delay: 0.4 }} initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} onClick={() => scrollTo('#story')} className="hover:text-neutral-500 transition-colors cursor-pointer max-sm:text-sm">Story</motion.button>
        <motion.button transition={{ duration: 0.6, delay: 0.6 }} initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} onClick={() => scrollTo('#gallery')} className="hover:text-neutral-500 transition-colors cursor-pointer max-sm:text-sm">Gallery</motion.button>
      </div>
    </motion.div>
    </motion.div>
  )
}