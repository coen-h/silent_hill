'use client';

interface HeroVideoProps {
  logo: string;
  back: string;
  phrase: string;
}

export default function Page({logo, back, phrase}: HeroVideoProps) {
  return (
    <div>
      <div className="absolute flex items-center justify-center flex-col gap-2 h-screen w-screen">
        <img className="w-160 grayscale invert" src={logo} />
        <p className="mb-50 italic text-lg">{phrase}</p>
      </div>
      <video className="w-screen h-screen object-cover z-[-1]" autoPlay muted loop playsInline preload="auto" src={back} />
      <div className="absolute top-[30%] from-50% bg-linear-to-t from-neutral-950 w-screen h-screen z-0" />
    </div>
  );
}
