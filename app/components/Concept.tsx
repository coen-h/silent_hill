'use client';
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const clips =  [
  {
    src: '/rec1c.mp4',
  },
  {
    src: '/rec2c.mp4',
  },
  {
    src: '/rec3c.mp4',
  },
  {
    src: '/rec4c.mp4',
  },
]

export default function Concept() {
  return (
    <section id="concept" className="relative h-screen w-screen">
      <div className="absolute inset-0">
        {clips.map((clip, index) => (
          <VideoStrip key={index++} clipSrc={clip.src} delay={(index + 1) * 0.06} />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b to-neutral-950" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-50% to-neutral-950" />
      <p></p>
    </section>
  );
}

function VideoStrip({ clipSrc, delay }: { clipSrc: string; delay: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView = useInView(videoRef, { amount: 0.4 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (inView) {
      video.currentTime = 0;
      video.play().catch(() => undefined);
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [inView]);

  return (
    <motion.video ref={videoRef} transition={{ duration: 0.6, delay, ease: 'easeOut' }} initial={{ opacity: 0, filter: 'blur(8px)' }} whileInView={{ opacity: 1, filter: 'blur(0px)' }} viewport={{ amount: 0.4 }} className="h-[25vh] w-full object-cover" playsInline muted loop={false} controls={false} preload="metadata">
      <source src={clipSrc} type="video/mp4" />
    </motion.video>
  );
}
