'use client';

import Header from "@/app/components/Header";

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
      <div className="absolute flex items-center justify-center flex-col gap-2 h-screen w-screen">
        <img className="mb-150 w-160 invert" src='https://1000logos.net/wp-content/uploads/2021/04/Silent-Hill-Logo-1999.png' />
      </div>
      <img className="w-screen h-screen object-cover z-[-1]" src='https://blob.udgtv.com/images/2025/06/16/1-b223e271-focus-0-0-696-464.jpg' />
      <div className="absolute top-[30%] from-50% bg-linear-to-t from-neutral-950 w-screen h-screen z-10" />
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