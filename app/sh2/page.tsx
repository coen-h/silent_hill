'use client';

import Header from "@/app/components/Header";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="absolute flex items-center justify-center flex-col gap-2 h-screen w-screen">
        <img className="mb-150 w-160 invert" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/SILENT_HILL_2_LOGO_%28Alt.%29.svg/960px-SILENT_HILL_2_LOGO_%28Alt.%29.svg.png' />
      </div>
      <img className="w-screen h-screen object-cover z-[-1]" src='https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/23475976/sh2_art_char_15.jpeg' />
      <div className="absolute top-[30%] from-50% bg-linear-to-t from-neutral-950 w-screen h-screen" />
    </div>
  );
}
