'use client';

import { motion } from 'framer-motion';

export default function Story() {
  return (
    <section id="story" className="w-screen h-screen relative flex justify-center items-center">
      <motion.img transition={{ duration: 0.8, ease: 'easeOut' }} initial={{ opacity: 0, filter: "blur(8px)"}} whileInView={{ opacity: 0.2, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.4 }} className="w-screen h-screen object-cover" src='/map.jpg' />
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-75% to-neutral-950" />
      <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-75% to-neutral-950" />
      <div className="absolute w-full flex flex-col items-center gap-2 px-2">
        <p className="text-4xl shadow-neutral-950 shadow-sm bg-black/50 p-2 backdrop-blur rounded-lg w-full max-w-[1400px]">STORY</p>
        <div className="flex bg-black/50 shadow-neutral-950 shadow-sm relative backdrop-blur rounded-lg w-full max-w-[1400px] h-[600px] max-xl:h-full overflow-hidden">
          <motion.img transition={{ duration: 0.8, ease: 'easeOut' }} initial={{ opacity: 0, filter: "blur(8px)"}} whileInView={{ opacity: 0.2, filter: "blur(0px)" }} viewport={{ once: false, amount: 0.2 }} className="absolute right-0 h-full pointer-events-none" src='/note.webp' />
          <motion.img transition={{ duration: 0.8, ease: 'easeOut' }} initial={{ opacity: 0, filter: "blur(8px)"}} whileInView={{ opacity: 0.2, filter: "blur(0px)" }} viewport={{ once: false, amount: 0.2 }} className="absolute left-18 -bottom-16 h-[450px] rounded-lg pointer-events-none" src='/knife.webp' />
          <p className="first-letter:text-4xl text-xl p-2 max-xl:hidden">Silent Hill 2 follows James Sunderland, a grieving man who receives an impossible letter from his late wife, urging him to meet her in the mysterious town of Silent Hill. Drawn by love, guilt, and confusion, James enters a fog-covered place that seems to shift and twist with his emotions. The town is nearly empty, yet he isn’t alone—shadows move where they shouldn't, and the silence feels watchful. As James wanders deeper, the boundaries between reality and memory begin to blur, hinting that Silent Hill knows more about him than he knows about himself.</p>
          <p className="first-letter:text-4xl text-xl self-end text-end p-2 max-xl:hidden">As he searches for answers, James encounters other lost souls—each seemingly trapped in their own personal nightmare. Strange creatures stalk the streets, and a towering figure with a pyramid-shaped helmet watches from the dark, embodying something James can’t yet face. Every step pulls him closer to a truth he isn’t sure he wants to uncover. Silent Hill 2 becomes a psychological descent, where the real horror might not be the monsters… but the reason James was called to the town in the first place.</p>
          <div className='xl:hidden p-2 flex flex-col gap-4'>
            <p className="first-letter:text-4xl text-xl max-sm:text-base">Silent Hill 2 follows James Sunderland, a grieving man who receives an impossible letter from his late wife, urging him to meet her in the mysterious town of Silent Hill. Drawn by love, guilt, and confusion, James enters a fog-covered place that seems to shift and twist with his emotions. The town is nearly empty, yet he isn’t alone—shadows move where they shouldn't, and the silence feels watchful. As James wanders deeper, the boundaries between reality and memory begin to blur, hinting that Silent Hill knows more about him than he knows about himself.</p>
            <p className="first-letter:text-4xl text-xl text-end max-sm:text-base">As he searches for answers, James encounters other lost souls—each seemingly trapped in their own personal nightmare. Strange creatures stalk the streets, and a towering figure with a pyramid-shaped helmet watches from the dark, embodying something James can’t yet face. Every step pulls him closer to a truth he isn’t sure he wants to uncover. Silent Hill 2 becomes a psychological descent, where the real horror might not be the monsters… but the reason James was called to the town in the first place.</p>
          </div>
        </div>
      </div>
    </section>
  )
}