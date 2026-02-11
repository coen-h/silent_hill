'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <section className="w-screen relative pb-4 bg-linear-to-b to-black flex flex-col items-center gap-2">
      <p className="text-xl">Bloober Team©</p>
      <div className="flex gap-2">
        <motion.img transition={{ duration: 0.6, delay: 0.4 }} initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2}} className="size-8" src='https://www.residentevil.com/requiem/assets/images/common/sns/icon_ig_w.svg'/>
        <motion.img transition={{ duration: 0.6, delay: 0.2 }} initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2}} className="size-8" src='https://www.residentevil.com/requiem/assets/images/common/sns/icon_fb_w.svg'/>
        <motion.img transition={{ duration: 0.6, delay: 0 }} initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2}} className="size-8" src='https://www.residentevil.com/requiem/assets/images/common/sns/icon_tt_w.svg'/>
        <motion.img transition={{ duration: 0.6, delay: 0.2 }} initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2}} className="size-8" src='https://www.residentevil.com/requiem/assets/images/common/sns/icon_x_w.svg'/>
        <motion.img transition={{ duration: 0.6, delay: 0.4 }} initial={{ opacity: 0, filter: "blur(8px)" }} whileInView={{ opacity: 1, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.2}} className="size-8" src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png'/>
      </div>
    </section>
  )
}