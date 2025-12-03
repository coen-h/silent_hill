'use client';

export default function Header() {
  const scrollTo = (id) => {
    const target = document.querySelector(id);
    if (window.lenis && target) {
      window.lenis.scrollTo(target, { duration: 1.4 });
    }
  };

  return (
    <div className="flex fixed border-x border-b border-neutral-900 bg-black/25 backdrop-blur rounded-b-xl justify-between items-center top-0 z-50 py-2 px-3 max-w-[1600px] w-full">
      <button className="hover:opacity-50 cursor-pointer" onClick={() => scrollTo('#hero')}>
        <img className="h-12" src="https://companieslogo.com/img/orig/6BO.SG.D-68bbfc94.png?t=1720244490" />
      </button>
      <div className="flex gap-4">
        <button onClick={() => scrollTo('#story')} className="hover:text-neutral-500 cursor-pointer">Story</button>
        <button onClick={() => scrollTo('#characters')} className="hover:text-neutral-500 cursor-pointer">Characters</button>
        <button onClick={() => scrollTo('#concept')} className="hover:text-neutral-500 cursor-pointer">Concept</button>
        <button onClick={() => scrollTo('#gallery')} className="hover:text-neutral-500 cursor-pointer">Gallery</button>
      </div>
    </div>
  )
}