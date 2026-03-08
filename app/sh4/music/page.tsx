'use client';

import Header from "@/app/components/Header";
import SoundCloudEmbed from "@/app/components/Soundcloud";

const headerData = {
  data: [
    {
      "name": "Characters",
      "path": "/sh4/characters",
      "delay": 0.2
    },
    {
      "name": "Artwork",
      "path": "/sh4/artwork",
      "delay": 0.4
    },
    {
      "name": "Music",
      "path": "/sh4/music",
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
      <div className="absolute top-[30%] from-50% bg-linear-to-t from-neutral-950 w-screen h-screen" />
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