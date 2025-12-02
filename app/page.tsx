'use client';

import Lenis from 'lenis'

const lenis = new Lenis({
  autoRaf: true,
});

lenis.on('scroll', (e) => {
  console.log(e);
});

export default function Home() {
  return (
    <div className="flex flex-col">
      <div className="w-full flex fixed justify-between items-center top-0 z-50 p-2">
        <img className="h-12" src='https://companieslogo.com/img/orig/6BO.SG.D-68bbfc94.png?t=1720244490' />
        <div className="flex gap-4">
          <p>Story</p>
          <p>Concept</p>
          <p>Characters</p>
          <p>Gallery</p>
        </div>
      </div>
      <div className="w-screen h-screen relative">
        <img className="absolute bottom-1/3 left-8" src='https://reflectstudios.com/assets/images/welcome-to-the-game_logo.png'/>
        <video className="w-screen h-screen object-cover" autoPlay muted loop playsInline preload="auto" src="https://www.residentevil.com/requiem/assets/movies/mainVisual/mainVisual_bg.mp4"></video>
      </div>
      <div className="w-screen h-screen relative">
        
      </div>
    </div>
  );
}
