'use client';

import Header from "@/app/components/Header";
import Characters from "@/app/components/Characters";
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

const charactersData = {
  data: {
    characters: [
      {
        name: "Heather",
        desc: "Heather is just a normal teenage girl who goes shopping one day and becomes trapped in a nightmare that surrounds her. With a freckled face and dyed blonde hair and dark roots, Heather has a short temper and isn't afraid to show some attitude. She isn't shy, but knows who she should and shouldn't trust and is very much daddy's girl. As a teenager, she has no full-time occupation but works various side jobs including babysitting.",
        backImage: "https://static.wikia.nocookie.net/silent/images/c/c0/Heather_Mason.png/revision/latest/smart/width/386/height/259?cb=20150414154920",
        charImage: "https://static.wikia.nocookie.net/p__/images/d/d3/Heather_Mason_jpg.webp/revision/latest?cb=20240805165734&path-prefix=protagonist",
        weapImage: "",
        image1: "https://preview.redd.it/i-made-some-heather-wallpapers-v0-lzej8fmicyhg1.png?width=1080&crop=smart&auto=webp&s=89f70bdb82a64a7ad966548442b157e167617b94",
        image2: "https://i.pinimg.com/736x/b5/4c/83/b54c8356e4aef2403da13e94e1f1722d.jpg",
      },
      {
        name: "Douglas Cartland",
        desc: "Douglas is a middle-aged private detective with grey hair and a beard who approaches Heather in the mall. Douglas explains that there's someone who wants to speak to her about her birth, but Heather ignores him. As she later finds out, Douglas was hired by Claudia to track Heather down. Soon realizing he had been lied to and used, Douglas instead turns to help Heather on her journey, holding no hard feelings for her behaviour and distrust towards him. ",
        backImage: "https://www.silenthillmemories.net/sh3/characters/douglas.png",
        charImage: "https://static.wikia.nocookie.net/silent/images/d/df/Douglascartland.png/revision/latest?cb=20140813052850",
        weapImage: "",
        image1: "https://w0.peakpx.com/wallpaper/386/489/HD-wallpaper-silent-hill-3-douglas-video-game-horror-douglas-silent-hill.jpg",
      },
      {
        name: "Claudia Wolf",
        desc: "Claudia is a very peculiar woman of bright, blonde hair, pale complexion and no eye brows, who chooses to walk around barefoot. Heather first meets her in a back mall hallway and questions what is happening with the monsters, to which Claudia replies it is the hand of God. Unbeknownst to Heather at this point, Claudia is the high priestess of the Order who is seeking out Heather, whom she explains before slipping away is the one who will lead 'us' to paradise with blood-stained hands.",
        backImage: "https://www.silenthillmemories.net/sh3/characters/claudia.png",
        charImage: "https://static.wikia.nocookie.net/silent/images/3/34/Claudia.png/revision/latest?cb=20170506073047",
        weapImage: "",
        image1: "https://w0.peakpx.com/wallpaper/9/821/HD-wallpaper-silent-hill-3-claudia-wolf-silent-hill-video-game-claudia-horror-women.jpg",
      },
      {
        name: "Vincent Smith",
        desc: "Called Father Vincent by his followers, Vincent is a young priest with brown hair and glasses who serves in the Order alongside Claudia. However he makes his intentions clear that he is not on her side but rather wishes to help Heather. From their first meeting in the Hilltop Center, Heather understandably isn't sure how much she can trust the man, who comes off as manipulative and often carries a suspicious smirk on his face as he tries to get under her skin. But Heather may not have a choice but to trust him as her only inside source to help fight back against Claudia, making him a valuable albeit uncertain ally.",
        backImage: "https://www.silenthillmemories.net/sh3/characters/vincent.png",
        charImage: "https://static.wikia.nocookie.net/silent/images/a/a1/VincentFull.png/revision/latest?cb=20150506221357",
        weapImage: "",
        image1: "https://static.wikia.nocookie.net/silent/images/8/84/Chapel_Library_Vincent.jpg/revision/latest?cb=20141012080433",
      }
    ]
  }
};

export default function Page() {
  return (
    <div>
      <Header data={headerData.data} />
      <HeroVideo logo='/sh3i.png' back='/sh3p.mp4' phrase='"When I find her, Ill kill her myself"' />
      <div className="absolute top-[85%] h-screen w-screen">
        <Characters data={charactersData.data} />
      </div>
    </div>
  );
}