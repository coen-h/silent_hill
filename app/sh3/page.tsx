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
    </div>
  );
}
