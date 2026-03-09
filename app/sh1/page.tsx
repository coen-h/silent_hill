'use client';

import Header from "@/app/components/Header";
import HeroImage from "@/app/components/HeroImage";

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
      <div className="w-screen h-screen relative">
        {/* <img src='https://i.redd.it/u86j5pyom66c1.jpg' className="absolute bottom-0 right-0 w-[600px] [mask-image:linear-gradient(to_top_left,black_10%,transparent_90%)]" />
        <img src='https://static0.srcdn.com/wordpress/wp-content/uploads/2021/10/Harry-Shoots-At-Nurses.jpg' className="absolute top-0 left-0 w-[600px] [mask-image:linear-gradient(to_bottom_right,black_10%,transparent_90%)]" /> */}
        <div className="relative w-[900px] mx-auto h-[1200px] z-50 flex flex-col items-center justify-center p-28">
          <img src='/note8.png' className="absolute -z-1 w-full" />
          <p className="text-4xl underline text-red-800 mt-18 opacity-80">PROLOGUE</p>
          <p className="text-lg italic text-red-900 text-center opacity-80">A world of someone's nightmarish delusions come to life. Little by little the invasion is spreading. Trying to swallow up everything in darkness.</p>
          <div className="w-full flex flex-col mt-4 gap-2 text-black opacity-80">
            <p className="text-xl w-[500px] first-letter:text-3xl">Silent Hill is a psychological survival horror game developed by Konami and originally released on the PlayStation in 1999. The game follows writer Harry Mason, who travels to the small resort town of Silent Hill after his adopted daughter Cheryl mysteriously disappears following a car crash.</p>
            <p className="text-xl text-right w-[500px] self-end first-letter:text-3xl">As Harry searches the fog-covered streets, the town begins to shift into a nightmarish “Otherworld,” filled with disturbing creatures and rusted, decaying environments. Instead of relying only on jump scares, Silent Hill focuses on psychological horror, using atmosphere, sound design, and symbolism to create a constant feeling of dread.</p>
            <p className="text-xl w-[500px] first-letter:text-3xl">The game is known for its thick fog (originally used to mask hardware limitations), eerie soundtrack composed by Akira Yamaoka, and its complex story involving cult rituals, trauma, and alternate realities. Multiple endings encourage replayability, depending on the player’s choices throughout the game.</p>
            <p className="text-xl text-right w-[500px] self-end first-letter:text-3xl">Silent Hill became one of the most influential horror games of its time and laid the foundation for the rest of the Silent Hill series.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
