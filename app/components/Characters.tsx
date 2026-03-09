'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function Characters(Odata) {
  const data = Odata.data;
  const characters = data.characters;
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const selectedCharacter = hoveredIndex !== null ? characters[hoveredIndex] : null;

  return (

      <section id="characters" className="relative w-screen">
        <video src='/fog.mp4' autoPlay muted loop playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-50% to-neutral-950" />
        <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-50% to-neutral-950" />
        <div className="max-w-[1700px] max-3xl:gap-8 max-2xl:gap-4 mx-auto grid grid-cols-4 max-xl:grid-cols-1 gap-12 px-4 py-24">
          {characters.map((character, key) => (
            <div onClick={() => setHoveredIndex(key)} className="h-[600px] max-xl:h-[250px] shadow-neutral-950 bg-black/75 relative text-center rounded-lg overflow-hidden cursor-pointer">
              <img className="absolute object-cover object-top inset-0 w-full h-full opacity-25 pointer-events-none" src={character.backImage}/>
              <p className="absolute w-full top-4 text-2xl">{character.name}</p>
              <p className="absolute w-full my-2 px-2 bottom-0 font-light line-clamp-3">{character.desc}</p>
              <img className={`absolute top-1/10 ${!character.weapImage ? 'left-1/2 -translate-x-1/2' : 'left-1/10'}  h-[450px] max-xl:opacity-15 max-xl:left-6 max-xl:pointer-events-none max-xl:hidden`} src={character.charImage}/>
              {character.weapImage ? (
                <img className="absolute top-2/12 xl:left-5/12 h-[380px] -rotate-12 max-xl:opacity-15 max-xl:right-4 max-xl:pointer-events-none max-xl:hidden" src={character.weapImage}/>
              ) : (
                ''
              )}
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selectedCharacter && hoveredIndex !== null ? (
            <motion.div className="fixed inset-0 z-600 bg-black/70 p-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setHoveredIndex(null)}>
              <div className="w-full h-full bg-neutral-950 rounded-lg flex relative overflow-hidden">
                <button onClick={() => setHoveredIndex(null)} className="absolute right-2 top-2 bg-white/40 w-8 h-8 rounded-lg z-5" />
                <div className="w-[450px] flex justify-center relative rounded-lg">
                  <img className="absolute object-cover object-top inset-0 h-full opacity-20 pointer-events-none" src={selectedCharacter.backImage}/>
                  <div className="w-full h-full z-1 absolute bg-[radial-gradient(ellipse_50%_50%_at_center,transparent_40%,#0a0a0a_100%)] pointer-events-none rounded-lg" />
                  <img className="h-full z-2 p-4" src={selectedCharacter.charImage} />
                </div>
                <div className="flex flex-col gap-2 z-2 p-4">
                  <p className="text-4xl">{selectedCharacter.name}</p>
                  <p className="text-xl w-[500px] ml-1 line-clamp-none">{selectedCharacter.desc}</p>
                </div>
                <div className="relative h-full w-full flex-1">
                  <img className="absolute h-full right-0 bottom-0 z-3 object-cover" src={selectedCharacter.image1} />
                  <div className="absolute inset-0 pointer-events-none bg-linear-to-l from-35% to-70% to-neutral-950 z-3" />
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </section>
    
  )
}
