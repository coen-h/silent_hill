'use client';

export default function Gallery() {
  return (
    <section id="gallery" className="w-screen h-screen relative">
      <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-75% to-neutral-950" />
      <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-75% to-neutral-950" />
      <img className="w-full h-[25vh] object-cover" src='https://cdn.wccftech.com/wp-content/uploads/2024/10/Silent-Hill-2-Review-04-Triangle-Man-scaled.jpg' />
      <img className="w-full h-[25vh] object-cover" src='https://static01.nyt.com/images/2024/10/12/multimedia/09silenthill2-remake-hpbv/09silenthill2-remake-hpbv-mediumSquareAt3X.jpg' />
      <img className="w-full h-[25vh] object-cover" src='https://images.squarespace-cdn.com/content/v1/56d5457d8259b57a20245e80/3abce8a1-3e0b-483b-9e8e-125bf743ba57/Silent+Hill+2+remake+PS5+exclusive+2024.JPG' />
      <img className="w-full h-[25vh] object-cover" src='https://www.overloadgames.com.br/img/blog/remake-de-silent-hill-2-pode-esclarecer-um-misterio-antigo-do-classico-de-2001/remake-de-silent-hill-2-pode-esclarecer-um-misterio-antigo-do-classico-de-2001.webp' />
    </section>
  )
}