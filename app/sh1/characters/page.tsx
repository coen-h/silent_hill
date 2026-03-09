'use client';

import Header from "@/app/components/Header";
import Characters from "@/app/components/Characters";
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

const charactersData = {
  data: {
    characters: [
      {
        name: "Harry Mason",
        desc: "As the main character, Harry Mason is a widowed writer whose wife died four years ago from a disease, leaving him to care for his seven-year-old adopted daughter, Cheryl. Harry has brown hair and brown eyes and is a kind, caring man who deeply loves his daughter. After Cheryl repeatedly begged him to take her to Silent Hill, he finally agreed, but a mysterious car crash at the town’s edge separates them. Alone and determined, Harry steps into the fog-shrouded streets, ready to face the town’s strange and terrifying secrets to find and save Cheryl.",
        backImage: "https://www.silenthillmemories.net/sh1/characters/harry_mason.png",
        charImage: "https://static.wikia.nocookie.net/videogameresource/images/9/94/230px-HarryMason.png/revision/latest?cb=20110708174546",
        weapImage: ""
      },
      {
        name: "Cheryl Mason",
        desc: "Cheryl Mason is Harry Mason’s quiet and mysterious young daughter in Silent Hill. After a sudden car crash at the entrance to town, she vanishes without a trace, becoming the driving force behind Harry’s desperate search. Though often seen only in brief, haunting moments, Cheryl’s presence is central to the story and deeply tied to the town’s dark secrets.",
        backImage: "https://www.silenthillmemories.net/sh1/characters/cheryl_mason.png",
        charImage: "https://i.namu.wiki/i/ZuROkBbZiDtSO5HXnMIBwtZWKCV2ekWnFup4GaT1_aPZmy_LdxBJvcvVjPbnlCJsewTp6z_JjlkwaAiZUHangw.webp",
        weapImage: ""
      },
      {
        name: "Cybil Bennett",
        desc: "Cybil Bennett is a police officer from the nearby town of Brahms who discovers Harry unconscious inside a café, becoming his first ally in Silent Hill. Blonde-haired and level-headed, she listens to his story and chooses to believe him, even handing over her gun for protection. As Harry continues searching for Cheryl, Cybil tries to leave town to get backup, only to find that all communication lines are cut.",
        backImage: "https://www.silenthillmemories.net/sh1/characters/cybil_bennet.png",
        charImage: "/sla.png",
        weapImage: ""
      },
      {
        name: "Dahlia Gillespie",
        desc: "First summoning Harry to a church by ringing its bell, Dahlia is a crazy lady with brown hair, blue eyes, lots of eye shadow, and strange clothing. In each meeting she feeds Harry what certainly sounds like crazy talk to help him find his daughter, but she always leaves quickly without further explanation. As told by Lisa, Dahlia apparently lost her child in a fire and has been crazy ever since.",
        backImage: "https://www.silenthillmemories.net/sh1/characters/dahlia_gillespie.png",
        charImage: "/we1.png",
        weapImage: ""
      }
    ]
  }
};

export default function Page() {
  return (
    <div>
      <Header data={headerData.data} />
      <HeroImage logo='https://upload.wikimedia.org/wikipedia/commons/6/63/Silent_Hill_1999_ntsc_logo.PNG' back='https://blob.udgtv.com/images/2025/06/16/1-b223e271-focus-0-0-696-464.jpg' phrase='"They Looked Like Monsters To You?"' />
      <div className="absolute top-[85%] h-screen w-screen">
        <Characters data={charactersData.data} />
      </div>
    </div>
  );
}