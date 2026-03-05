'use client';

import Header from "@/app/components/Header";
import Characters from "@/app/components/Characters";

const charactersData = {
  data: {
    characters: [
      {
        name: "Heather",
        desc: "Heather is just a normal teenage girl who goes shopping one day and becomes trapped in a nightmare that surrounds her.",
        backImage: "https://static.wikia.nocookie.net/silent/images/c/c0/Heather_Mason.png/revision/latest/smart/width/386/height/259?cb=20150414154920",
        charImage: "https://upload.wikimedia.org/wikipedia/en/c/c0/Heather_Mason.png",
        weapImage: ""
      },
      {
        name: "Douglas Cartland",
        desc: "Douglas is a middle-aged private detective with grey hair and a beard who approaches Heather in the mall. ",
        backImage: "https://www.silenthillmemories.net/sh3/characters/douglas.png",
        charImage: "https://static.wikia.nocookie.net/silent/images/d/df/Douglascartland.png/revision/latest?cb=20140813052850",
        weapImage: ""
      },
      {
        name: "Claudia Wolf",
        desc: "Claudia is a very peculiar woman of bright, blonde hair, pale complexion and no eye brows, who chooses to walk around barefoot.",
        backImage: "https://www.silenthillmemories.net/sh3/characters/claudia.png",
        charImage: "https://static.wikia.nocookie.net/silent/images/3/34/Claudia.png/revision/latest?cb=20170506073047",
        weapImage: ""
      },
      {
        name: "Vincent Smith",
        desc: "Called Father Vincent by his followers, Vincent is a young priest with brown hair and glasses who serves in the Order alongside Claudia.",
        backImage: "https://www.silenthillmemories.net/sh3/characters/vincent.png",
        charImage: "https://static.wikia.nocookie.net/silent/images/a/a1/VincentFull.png/revision/latest?cb=20150506221357",
        weapImage: ""
      }
    ]
  }
};

export default function Page() {
  return (
    <div>
      <Header />
      <div className="absolute flex items-center justify-center flex-col gap-2 h-screen w-screen">
        <img className="mb-150 w-160 invert" src='https://www.gamegrin.com/assets/game/silent-hill-3/_resampled/croppedimage1201631-silent-hill-3-image.png' />
      </div>
      <video className="w-screen h-screen object-cover z-[-1]" autoPlay muted loop playsInline preload="auto" src='/sh3p.mp4' />
      <div className="absolute top-[30%] from-50% bg-linear-to-t from-neutral-950 w-screen h-screen" />
      <Characters data={charactersData.data} />
    </div>
  );
}
