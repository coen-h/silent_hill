'use client';

import Header from "@/app/components/Header";
import Characters from "@/app/components/Characters";
import HeroImage from "@/app/components/HeroImage";

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

const charactersData = {
  data: {
    characters: [
      {
        name: "Henry Townshend",
        desc: "Henry Townshend is a 28-year-old photographer who lives alone in Room 302 of South Ashfield Heights. Quiet, reserved, and somewhat detached, Henry tends to keep to himself and rarely interacts with his neighbors. He has short brown hair and green eyes, and his apartment walls are decorated with his photography. Once an occasional visitor to Silent Hill in his youth, Henry suddenly finds himself trapped inside his own apartment, which has become mysteriously sealed from the inside. Confused and overwhelmed, his journey begins with a single thought echoing in his mind: 'What... the hell...?' Despite his passive demeanor, Henry is forced to confront horrors tied to the building and its dark past.",
        backImage: "https://www.silenthillmemories.net/sh4/characters/henry.png",
        charImage: "",
        weapImage: "",
        image1: "",
        image2: "",
      },
      {
        name: "Eileen Galvin",
        desc: "Eileen Galvin is Henry's neighbor from Room 303 and is in her mid-20s. With brown medium-long hair and green eyes, she has lived next door to Henry for two years, though they have barely spoken beyond passing each other in the hallway. Eileen lives a quiet and somewhat uneventful life, often seen watching TV or going about her daily routine. It is not until the second half of Henry's ordeal that she becomes directly involved in the nightmare surrounding Room 302. As events escalate, Eileen becomes both a companion and a vulnerable figure deeply connected to the unfolding ritual.",
        backImage: "https://www.silenthillmemories.net/sh4/characters/eileen.png",
        charImage: "",
        weapImage: "",
        image1: "",
        image2: "",
      },
      {
        name: "Frank Sunderland",
        desc: "Frank is the superintendent of South Ashfield Heights. He is an old man with white hair and blue eyes and is known to talk or mumble to himself at times. In his years as the super, Frank has seen a lot of strange things around his apartment building, including in Room 302 years ago. Not much else is known about Frank, but Henry remembers hearing from him that his son and daughter-in-law went to Silent Hill and haven't been seen since. Put one and two together with his last name and you may have an idea of what that means.",
        backImage: "https://www.silenthillmemories.net/sh4/characters/frank.png",
        charImage: "",
        weapImage: "",
        image1: "",
        image2: "",
      },
      {
        name: "Cynthia Velasquez",
        desc: "Cynthia is an attractive woman who's not afraid to show off her curves by dressing provocatively and always willing to have some flirtatious fun. Cynthia is hispanic with a subtle accent and has long brown hair and hazel eyes. Henry first notices her out his apartment window before meeting her lost in the Subway. Believing to be having a dream, she offers Henry a 'special favour' if he can guide her to the exit. Might as well have a little fun if it's just a dream, right?",
        backImage: "https://www.silenthillmemories.net/sh4/characters/cynthia.png",
        charImage: "",
        weapImage: "",
        image1: "",
        image2: "",
      }
    ]
  }
};

export default function Page() {
  return (
    <div>
      <Header data={headerData.data} />
      <HeroImage logo='/sh4d.png' back='https://wallpapercave.com/wp/wp15266238.jpg' phrase='"What the hell...?"' />
      <Characters data={charactersData.data} />
    </div>
  );
}