'use client';

import Header from "@/app/components/Header";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="absolute flex items-center justify-center flex-col gap-2 h-screen w-screen">
        <img className="mb-150 w-160 invert" src='https://www.gamegrin.com/assets/game/silent-hill-3/_resampled/croppedimage1201631-silent-hill-3-image.png' />
      </div>
      <video className="w-screen h-screen object-cover z-[-1]" autoPlay muted loop playsInline preload="auto" src='/sh3p.mp4' />
      <div className="absolute top-[30%] from-50% bg-linear-to-t from-neutral-950 w-screen h-screen" />
    </div>
  );
}
