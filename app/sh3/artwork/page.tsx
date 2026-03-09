'use client';

import Header from "@/app/components/Header";
import HeroVideo from "@/app/components/HeroVideo";

const headerData = {
  data: [
    {
      "name": "Characters",
      "path": "/sh3/characters",
      "delay": 0.2
    },
    {
      "name": "Artwork",
      "path": "/sh3/artwork",
      "delay": 0.4
    },
    {
      "name": "Music",
      "path": "/sh3/music",
      "delay": 0.6
    }
  ]
};

export default function Page() {
  return (
    <div>
      <Header data={headerData.data} />
      <HeroVideo logo='/sh3i.png' back='/sh3p.mp4' phrase='"When I find her, Ill kill her myself"' />
      <div className="absolute top-[85%] flex flex-col gap-4">
        <div className="grid grid-cols-4 gap-4">
          <img className="z-100 w-full h-100 object-cover" src='https://i.guim.co.uk/img/media/187c7e3dc8e800a96f448e92e68ae7e75b67f165/111_78_1847_1109/master/1847.jpg?width=445&dpr=1&s=none&crop=none' />
          <img className="z-100 w-full h-100 object-cover" src='https://i0.wp.com/gatecrashers.fan/wp-content/uploads/2024/10/GCH-6.png?fit=1200%2C675&ssl=1' />
          <img className="z-100 w-full h-100 object-cover" src='https://i.redd.it/u86j5pyom66c1.jpg' />
          <img className="z-100 w-full h-100 object-cover" src='https://europe1.discourse-cdn.com/unity/original/4X/4/f/2/4f2a9746738e4bafe77f9875576bcfdeec2bc2a9.jpeg' />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <img className="z-100 w-full h-100 object-cover" src='https://i0.wp.com/gatecrashers.fan/wp-content/uploads/2024/10/GCH-6.png?fit=1200%2C675&ssl=1' />
          <img className="z-100 w-full h-100 object-cover" src='https://i.redd.it/u86j5pyom66c1.jpg' />
          <img className="z-100 w-full h-100 object-cover" src='https://europe1.discourse-cdn.com/unity/original/4X/4/f/2/4f2a9746738e4bafe77f9875576bcfdeec2bc2a9.jpeg' />
        </div>
        <div className="grid grid-cols-5 gap-4">
          <img className="z-100 w-full h-100 object-cover" src='https://i0.wp.com/gatecrashers.fan/wp-content/uploads/2024/10/GCH-6.png?fit=1200%2C675&ssl=1' />
          <img className="z-100 w-full h-100 object-cover" src='https://i.redd.it/u86j5pyom66c1.jpg' />
          <img className="z-100 w-full h-100 object-cover" src='https://europe1.discourse-cdn.com/unity/original/4X/4/f/2/4f2a9746738e4bafe77f9875576bcfdeec2bc2a9.jpeg' />
          <img className="z-100 w-full h-100 object-cover" src='https://i0.wp.com/gatecrashers.fan/wp-content/uploads/2024/10/GCH-6.png?fit=1200%2C675&ssl=1' />
          <img className="z-100 w-full h-100 object-cover" src='https://i.redd.it/u86j5pyom66c1.jpg' />
        </div>
      </div>
    </div>
  );
}