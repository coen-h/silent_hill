export default function Header() {
  return (
    <div className="flex fixed border-x border-b border-neutral-700 bg-black/25 backdrop-blur rounded-b-xl justify-between items-center top-0 z-50 py-2 px-3 max-w-[1600px] w-full">
      <img className="h-12" src='https://companieslogo.com/img/orig/6BO.SG.D-68bbfc94.png?t=1720244490' />
      <div className="flex gap-4">
        <p className="hover:text-neutral-500 cursor-pointer">Story</p>
        <p className="hover:text-neutral-500 cursor-pointer">Concept</p>
        <p className="hover:text-neutral-500 cursor-pointer">Characters</p>
        <p className="hover:text-neutral-500 cursor-pointer">Gallery</p>
      </div>
    </div>
  )
}