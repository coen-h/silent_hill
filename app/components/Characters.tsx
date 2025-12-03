const characters = [
  {
    name: 'James Sunderland',
    description: 'The protagonist of the story. After receiving a letter addressed from his late wife, James travels to Silent Hill in search of answers.',
    backImage: '/jamesBack.webp',
    charImage: '/jamesChar.webp',
    weapImage: '/jamesWeap.webp',
  },
  {
    name: 'Ethan Winters',
    description: 'The protagonist of the story. After receiving a letter addressed from his late wife, James travels to Silent Hill in search of answers.',
    backImage: '/ethanBack.webp',
    charImage: '/ethanChar.webp',
    weapImage: '/ethanWeap.webp',
  },
  {
    name: 'James Sunderland',
    description: 'The protagonist of the story. After receiving a letter addressed from his late wife, James travels to Silent Hill in search of answers.',
    backImage: '/leonBack.webp',
    charImage: '/leonChar.webp',
    weapImage: '/leonWeap.webp',
  },
]

export default function Characters() {
  return (
    <div className="w-screen max-w-[1300px] py-24">
      <div className="grid grid-cols-3 gap-16">
        {characters.map((character, key) => (
          <div key={key} className="h-[600px] bg-black relative text-center rounded-xl">
            <p className="absolute w-full top-4 text-2xl ">{character.name}</p>
            <p className="absolute w-full p-2 bottom-0 font-light line-clamp-3">{character.description}</p>
            <img className="absolute object-cover object-top inset-0 w-full h-full opacity-15" src={character.backImage} />
            <img className="absolute top-1/10 left-1/10 h-[450px]" src={character.charImage} />
            <img className="absolute top-2/12 left-5/10 h-[380px] -rotate-12" src={character.weapImage}/>
          </div>
        ))}
      </div>
    </div>
  )
}