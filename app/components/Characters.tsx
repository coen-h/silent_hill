'use client';

import { motion } from 'framer-motion';

const characters = [
  {
    name: 'James Sunderland',
    description: 'The protagonist of the story. After receiving a letter addressed from his late wife, James travels to Silent Hill in search of answers.',
    backImage: '/jamesBack.webp',
    charImage: '/jamesChar.webp',
    weapImage: '/jamesWeap.webp',
  },
  {
    name: 'Ethan Winters',
    description: 'Ethan Winters (イーサン・ウィンターズ Īsan Wintāzu?) (c.1984-10 February 2021) was an American mutant trained as a systems engineer.',
    backImage: '/ethanBack.webp',
    charImage: '/ethanChar.webp',
    weapImage: '/ethanWeap.webp',
  },
  {
    name: 'Leon Kennedy',
    description: 'Leon Kennedy is an Italian-American currently employed as a federal agent by the Division of Security Operations (D.S.O.).',
    backImage: '/leonBack.webp',
    charImage: '/leonChar.webp',
    weapImage: '/leonWeap.webp',
  },
]

export default function Characters() {
  return (
    <section id="characters" className="relative w-screen">
      <video src='/fog.mp4' autoPlay muted loop playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-50% to-neutral-950" />
      <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-50% to-neutral-950" />
      <div className="max-w-[1300px] max-3xl:gap-8 max-2xl:gap-4 mx-auto grid grid-cols-3 max-xl:grid-cols-1 gap-16 px-4 py-24">
        {characters.map((character, key) => (
          <motion.div transition={{ duration: 0.8, ease: 'easeOut' }} initial={{ opacity: 0, filter: "blur(8px)", y: 12 }} whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }} viewport={{ once: true, amount: 0.2}} key={key} className="h-[600px] max-xl:h-[250px] shadow-neutral-950 shadow-xl bg-black/75 relative text-center rounded-lg blur-xs overflow-hidden">
            <p className="absolute w-full top-4 text-2xl">{character.name}</p>
            <p className="absolute w-full my-2 px-2 bottom-0 font-light line-clamp-3">{character.description}</p>
            <img className="absolute object-cover object-top inset-0 w-full h-full opacity-15 pointer-events-none max-md:opacity-0" src={character.backImage} />
            <img className="absolute top-1/10 left-1/10 h-[450px] max-xl:opacity-15 max-xl:left-6 max-xl:pointer-events-none" src={character.charImage} />
            <img className="absolute top-2/12 xl:left-5/10 h-[380px] -rotate-12 max-xl:opacity-15 max-xl:right-4 max-xl:pointer-events-none" src={character.weapImage}/>
          </motion.div>
        ))}
      </div>
    </section>
  )
}