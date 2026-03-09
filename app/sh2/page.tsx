'use client';

import Header from "@/app/components/Header";
import HeroVideo from "@/app/components/HeroVideo";

const headerData = {
  data: [
    {
      "name": "Characters",
      "path": "/sh2/characters",
      "delay": 0.2
    },
    {
      "name": "Artwork",
      "path": "/sh2/artwork",
      "delay": 0.4
    },
    {
      "name": "Music",
      "path": "/sh2/music",
      "delay": 0.6
    }
  ]
};

export default function Page() {
  return (
    <div>
      <Header data={headerData.data} />
      <HeroVideo logo='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/SILENT_HILL_2_LOGO_%28Alt.%29.svg/960px-SILENT_HILL_2_LOGO_%28Alt.%29.svg.png' back='/1.mp4' phrase='"In my restless dream, I see that town. Silent Hill."' />
      {/* <HeroImage logo='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/SILENT_HILL_2_LOGO_%28Alt.%29.svg/960px-SILENT_HILL_2_LOGO_%28Alt.%29.svg.png' back='https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/23475976/sh2_art_char_15.jpeg' phrase='"In my restless dream, I see that town. Silent Hill."' /> */}
    </div>
  );
}
