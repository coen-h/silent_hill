'use client';

import Header from "@/app/components/Header";
import HeroImage from "@/app/components/HeroImage";
import SoundCloudEmbed from "@/app/components/Soundcloud";

const headerData = {
  data: [
    {
      "name": "Characters",
      "path": "/sh1/characters",
      "delay": 0.2
    },
    {
      "name": "Artwork",
      "path": "/sh1/artwork",
      "delay": 0.4
    },
    {
      "name": "Music",
      "path": "/sh1/music",
      "delay": 0.6
    }
  ]
};

export default function Page() {
  return (
    <div>
      <Header data={headerData.data} />
      <HeroImage logo='https://upload.wikimedia.org/wikipedia/commons/6/63/Silent_Hill_1999_ntsc_logo.PNG' back='https://blob.udgtv.com/images/2025/06/16/1-b223e271-focus-0-0-696-464.jpg' phrase='"They Looked Like Monsters To You?"' />
      <div className="absolute top-[85%] w-full">
      <div className="grid grid-cols-2 max-w-[1400px] gap-4 mx-auto my-8 z-100">
        <div className="flex flex-col gap-2">
          <SoundCloudEmbed code='1837010238' />
          <details className="bg-gray-800 text-white text-center p-2 rounded-md z-100">
            <summary className="cursor-pointer font-semibold">Click here for more info</summary>
            <p className="mt-2 "><span className="font-semibold">Silent Hill</span> is the theme song to the 1999 video game <a className='underline' href='https://silenthill.fandom.com/wiki/Silent_Hill_(video_game)'>of the same name</a>, as well as the theme song to the franchise as a whole. The song, along with the <a className='underline' href='https://genius.com/Akira-yamaoka-theme-of-laura-lyrics' >theme to the second game in the series</a>, is often interpolated, sampled or mixed into other songs from the games.</p>
          </details>
        </div>
        <div className="flex flex-col gap-2">
          <SoundCloudEmbed code='1837010277' />
          <details className="bg-gray-800 text-white text-center p-2 rounded-md z-100">
            <summary className="cursor-pointer font-semibold">Click here for more info</summary>
            <p className="mt-2 "><span className="font-semibold">All</span> is a song from Silent Hill. The song is track 2 in the Silent Hill soundtrack and was composed by Akira Yamaoka. It plays in the Otherworld alleyway at the beginning of the game.</p>
          </details>
        </div>
        <SoundCloudEmbed code='1837010316' />
        <SoundCloudEmbed code='1837010412' />
        <SoundCloudEmbed code='1837010442' />
      </div>
      </div>
    </div>
  );
}