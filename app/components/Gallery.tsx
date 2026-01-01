'use client';

export default function Gallery() {
  return (
    <section id="gallery" className="w-screen h-screen relative">
      <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-30% to-neutral-950" />
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-60% to-neutral-950" />
      {/* <div className="grid grid-cols-4"> */}
        {/* <img className="h-[25vh] w-full object-cover" src='cha.webp' />
        <img className="h-[25vh] w-full object-cover" src='mir.webp' />
        <img className="h-[25vh] w-full object-cover" src='man.webp' />
        <img className="h-[25vh] w-full object-cover" src='bag.webp' />
        <img className="h-[25vh] w-full object-cover" src='bat.webp' />
        <img className="h-[25vh] w-full object-cover" src='ten.png' />
        <img className="h-[25vh] w-full object-cover opacity-50" src='pyr.jpg' />
        <img className="h-[25vh] w-full object-cover" src='sta.jpg' />
        <img className="h-[25vh] w-full object-cover" src='dic.webp' />
        <img className="h-[25vh] w-full object-cover opacity-50" src='pyr2.jpg' />
        <img className="h-[25vh] w-full object-cover" src='nur.jpg' />
        <img className="h-[25vh] w-full object-cover" src='pyr3.webp' />
        <img className="h-[25vh] w-full object-cover" src='mov.webp' />  
        <img className="h-[25vh] w-full object-cover" src='red.webp' />
        <img className="h-[25vh] w-full object-cover" src='nei.webp' />
        <img className="h-[25vh] w-full object-cover" src='stai.webp' /> */}
        <img className="h-screen w-screen object-cover" src='full.png' />
      {/* </div> */}
    </section>
  )
}