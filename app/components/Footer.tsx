'use client';

export default function Footer() {
  return (
    <section className="w-screen relative pb-4 bg-linear-to-b to-black flex flex-col items-center gap-2">
      <p className="text-xl">Bloober Team©</p>
      <div className="flex gap-2">
        <img className="size-8" src='https://www.residentevil.com/requiem/assets/images/common/sns/icon_ig_w.svg'/>
        <img className="size-8" src='https://www.residentevil.com/requiem/assets/images/common/sns/icon_fb_w.svg'/>
        <img className="size-8" src='https://www.residentevil.com/requiem/assets/images/common/sns/icon_tt_w.svg'/>
        <img className="size-8" src='https://www.residentevil.com/requiem/assets/images/common/sns/icon_x_w.svg'/>
        <img className="size-8" src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png'/>
      </div>
    </section>
  )
}