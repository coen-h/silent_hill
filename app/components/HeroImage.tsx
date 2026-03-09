'use client';

interface HeroImageProps {
  logo: string;
  back: string;
  phrase: string;
}

export default function Page({logo, back, phrase}: HeroImageProps) {
  return (
    <div>
      <div className="absolute flex items-center justify-center flex-col gap-2 h-screen w-screen">
        <img className="w-160 grayscale invert" src={logo} />
        <p className="mb-50 italic text-lg">{phrase}</p>
      </div>
      <img className="w-screen h-screen object-cover z-[-1]" src={back} />
      <div className="absolute top-[30%] from-50% bg-linear-to-t from-neutral-950 w-screen h-screen z-0" />
    </div>
  );
}
