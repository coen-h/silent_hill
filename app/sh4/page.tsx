'use client';

import { useState, useEffect, useRef } from "react";
import Header from "@/app/components/Header";

export default function Page() {
  const [change, setChange] = useState(0)
  const [start, setStart] = useState(1)
  const [visible, setVisible] = useState(false);
  const [mediaUnlocked, setMediaUnlocked] = useState(false);

  const videoRef1 = useRef<HTMLVideoElement | null>(null);;
  const videoRef2 = useRef<HTMLVideoElement | null>(null);;

  useEffect(() => {
    const unlock = () => {
      setMediaUnlocked(true);
      window.removeEventListener("click", unlock);
    };

    window.addEventListener("click", unlock);
    return () => window.removeEventListener("click", unlock);
  }, []);

  useEffect(() => {
    if (change === 1 && videoRef1.current) {
      videoRef1.current.currentTime = 0;
      videoRef1.current.play();
    } else if (change === 0 && videoRef2.current) {
      videoRef2.current.currentTime = 0;
      videoRef2.current.play();
    }
  }, [change]);

  useEffect(() => {
    if (start === 3) {
      setTimeout(() => setVisible(true), 50);
    }
  }, [start]);

  return (
    <>
    {start === 3 ? (
      <>
        <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <Header />
          <p>test</p>
        </div>
      </>
    ) : start === 1 ? (
      <>
        {!mediaUnlocked ? (
          <div onClick={e => setMediaUnlocked(true)} className="absolute w-screen h-screen bg-black/50 flex items-center justify-center">
            <p className="text-3xl">Please click anywhere to start.</p>
          </div>
        ) : null}
        <button className="absolute w-80 z-50 h-24 bottom-[8%] left-[32%]" onMouseOver={e => setChange(1)} onClick={() => { new Audio('/sound.mp3').play(); setTimeout(() => setStart(2), 1500); }} />
        <button className="absolute w-80 z-50 h-24 bottom-[8%] right-[32%]" onMouseOver={e => setChange(0)} />
        <video ref={videoRef1} src='/change22.mp4' autoPlay={mediaUnlocked} playsInline preload="auto" className={`w-screen h-screen object-cover z-10 ${change ? "" : "hidden"}`} />
        <video ref={videoRef2} src='/change11.mp4' autoPlay={mediaUnlocked} playsInline preload="auto" className={`w-screen h-screen object-cover z-10 ${!change ? "" : "hidden"}`} />
      </>
     ) : (
      <>
        <video src='/hole.mp4' autoPlay playsInline preload="auto" className="w-screen h-screen object-cover" onEnded={e => setStart(3)} />
      </>
     )}
    </>
  );
}
