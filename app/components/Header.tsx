'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header({ data }) {
  const games = [
    { name: "Silent Hill 1", path: "/sh1" },
    { name: "Silent Hill 2", path: "/sh2" },
    { name: "Silent Hill 3", path: "/sh3" },
    { name: "Silent Hill 4", path: "/sh4" },
  ];

  return (
    <motion.div animate={{ opacity: 1, filter: "blur(0px)" }} transition={{ duration: 0.5 }} className="fixed flex border-b border-neutral-800 bg-black/25 backdrop-blur-lg justify-between items-center top-0 z-500 py-2 px-3 w-full opacity-0 blur-md">
      <Link href='/' className="hover:opacity-50 transition-opacity cursor-pointer">
        <img className="h-10" src='https://companieslogo.com/img/orig/6BO.SG.D-68bbfc94.png?t=1720244490' />
      </Link>
      <div className="flex gap-4 items-center">
        {/* <motion.button transition={{ duration: 0.6 }} initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} onClick={() => scrollTo('#concept')} className="hover:text-neutral-500 transition-colors cursor-pointer max-sm:text-sm">Concept</motion.button> */}
        <div className="relative w-24 group">
          <div className="w-full bg-black/60 border text-center text-lg border-neutral-800 rounded-lg px-3 py-1.5 cursor-pointer">Series</div>
          <div className="absolute left-0 mt-1 w-80 bg-black rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col">
            {games.map((game) => (
              <Link href={game.path} key={game.path} className="px-4 py-2 hover:bg-white/10 first:rounded-t-lg last:rounded-b-lg text-lg cursor-pointer" >
                {game.name}
              </Link>
            ))}
          </div>
        </div>
        {data && data.map((button) => (
          <Link href={button.path}>
            <motion.button 
              transition={{ duration: 0.6, delay: button.delay }} 
              initial={{ opacity: 0, filter: "blur(8px)" }} 
              whileInView={{ opacity: 1, filter: "blur(0px)" }} 
              className="hover:text-neutral-500 transition-colors text-lg cursor-pointer max-sm:text-sm"
            >
              {button.name}
            </motion.button>
          </Link>
        ))}
        {/* <motion.button transition={{ duration: 0.6, delay: 0.2 }} initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} onClick={() => scrollTo('#characters')} className="hover:text-neutral-500 transition-colors text-lg cursor-pointer max-sm:text-sm">Characters</motion.button>
        <motion.button transition={{ duration: 0.6, delay: 0.4 }} initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} onClick={() => scrollTo('#music')} className="hover:text-neutral-500 transition-colors text-lg cursor-pointer max-sm:text-sm">Music</motion.button>
        <motion.button transition={{ duration: 0.6, delay: 0.6 }} initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} onClick={() => scrollTo('#artwork')} className="hover:text-neutral-500 transition-colors text-lg cursor-pointer max-sm:text-sm">Artwork</motion.button> */}
      </div>
    </motion.div>
  )
}
