'use client';

import Header from "@/app/components/Header";

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
  console.log(headerData)
  return (
    <div>
      <Header data={headerData.data} />
      <div className="absolute flex items-center justify-center flex-col gap-2 h-screen w-screen">
        <img className="mb-150 w-160 invert" src='https://1000logos.net/wp-content/uploads/2021/04/Silent-Hill-Logo-1999.png' />
      </div>
      <img className="w-screen h-screen object-cover -z-1" src='https://blob.udgtv.com/images/2025/06/16/1-b223e271-focus-0-0-696-464.jpg' />
      <div className="absolute top-[30%] from-50% bg-linear-to-t from-neutral-950 w-screen h-screen z-0" />
      <div className="relative w-[1000px] mx-auto h-[900px] z-50 flex flex-col items-center justify-center">
        <p className="text-4xl underline text-red-300">PROLOGUE</p>
        <p className="text-lg italic text-red-400 text-center">A world of someone's nightmarish delusions come to life. Little by little the invasion is spreading. Trying to swallow up everything in darkness.</p>
        <div className="w-full flex flex-col mt-4">
          <p className="text-xl w-[500px] first-letter:text-3xl">Silent Hill is a psychological survival horror game developed by Konami and originally released on the PlayStation in 1999. The game follows writer Harry Mason, who travels to the small resort town of Silent Hill after his adopted daughter Cheryl mysteriously disappears following a car crash.</p>
          <p className="text-xl text-right w-[500px] self-end first-letter:text-3xl">As Harry searches the fog-covered streets, the town begins to shift into a nightmarish “Otherworld,” filled with disturbing creatures and rusted, decaying environments. Instead of relying only on jump scares, Silent Hill focuses on psychological horror, using atmosphere, sound design, and symbolism to create a constant feeling of dread.</p>
          <p className="text-xl w-[500px] first-letter:text-3xl">The game is known for its thick fog (originally used to mask hardware limitations), eerie soundtrack composed by Akira Yamaoka, and its complex story involving cult rituals, trauma, and alternate realities. Multiple endings encourage replayability, depending on the player’s choices throughout the game.</p>
          <p className="text-xl text-right w-[500px] self-end first-letter:text-3xl">Silent Hill became one of the most influential horror games of its time and laid the foundation for the rest of the Silent Hill series.</p>
        </div>
      </div>
    </div>
  );
}
