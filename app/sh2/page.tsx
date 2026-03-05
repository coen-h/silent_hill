'use client';

import Header from "@/app/components/Header";
import Characters from "@/app/components/Characters";

const charactersData = {
  data: {
    characters: [
      {
        name: "James Sunderland",
        desc: "The main character of Silent Hill 2, James is a 29-year-old clerk with blonde hair and yellowish-green eyes. Normally reserved and quiet, James keeps to himself and rarely speaks about his personal life. Three years after the death of his wife Mary from a rare and fatal disease, he receives a mysterious letter from her, calling him to their 'special place' in Silent Hill. Driven by guilt, grief, and unresolved emotions, James ventures into the fog-covered town in search of answers. Though often difficult to read, his journey slowly reveals a deeply emotional and conflicted man whose love and regret shape every step he takes.",
        backImage: "",
        charImage: "",
        weapImage: "",
        image1: "",
        image2: "",
      },
      {
        name: "Mary Shepherd-Sunderland",
        desc: "Mary was James' loving wife who passed away at the age of 25 after suffering from a rare and incurable disease. Once cheerful and kind, her illness changed her emotionally, bringing out anger, despair, and instability as she struggled with the fear of dying. Despite moments of bitterness and frustration, Mary remained deeply loving at heart. Her complex relationship with James—filled with both tenderness and pain—forms the emotional core of Silent Hill 2. Even after her death, her presence continues to haunt and guide James through the town.",
        backImage: "",
        charImage: "",
        weapImage: "",
        image1: "",
        image2: "",
      },
      {
        name: "Maria",
        desc: "Maria is a mysterious woman who closely resembles Mary but possesses a far more confident, flirtatious, and provocative personality. With dyed blonde hair tipped in red and blue eyes, she works as an exotic dancer at Heaven's Night. James meets her in Rosewater Park, where she seems to already know his name. Maria accompanies James throughout much of his journey, though her true nature and origin remain unclear. She represents something deeper within James' psyche, embodying both temptation and unresolved emotion, making her one of the most enigmatic figures in Silent Hill 2.",
        backImage: "",
        charImage: "",
        weapImage: "",
        image1: "",
        image2: "",
      },
      {
        name: "Angela Orosco",
        desc: "Angela is a 19-year-old girl with brown hair and brown eyes whom James first meets in a graveyard near Silent Hill. Timid, nervous, and emotionally fragile, she is searching for her mother while fleeing a traumatic past. As James encounters her throughout the game, pieces of her tragic story unfold, revealing the abuse and suffering she endured. Angela's personal version of Silent Hill reflects her inner torment, and her story parallels James' own guilt and despair. She is one of the most heartbreaking and symbolic characters in the game.",
        backImage: "",
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
      <Header />
      <div className="absolute flex items-center justify-center flex-col gap-2 h-screen w-screen">
        <img className="mb-150 w-160 invert" src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/SILENT_HILL_2_LOGO_%28Alt.%29.svg/960px-SILENT_HILL_2_LOGO_%28Alt.%29.svg.png' />
      </div>
      <img className="w-screen h-screen object-cover z-[-1]" src='https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/23475976/sh2_art_char_15.jpeg' />
      <div className="absolute top-[30%] from-50% bg-linear-to-t from-neutral-950 w-screen h-screen" />
      <Characters data={charactersData.data} />
    </div>
  );
}
