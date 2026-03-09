'use client'

import { useEffect, useRef, useState } from "react"

interface SoundCloudSound {
  title: string;
  artwork_url: string | null;
  user: {
    username: string;
  };
}

interface SoundCloudWidget {
  bind: (event: string, callback: () => void) => void;
  getDuration: (callback: (duration: number) => void) => void;
  getCurrentSound: (callback: (sound: SoundCloudSound) => void) => void;
  setVolume: (volume: number) => void;
  getPosition: (callback: (position: number) => void) => void;
  play: () => void;
  pause: () => void;
  seekTo: (milliseconds: number) => void;
}

declare global {
  interface Window {
    SC: {
      Widget: ((iframe: HTMLIFrameElement | null) => SoundCloudWidget) & {
        Events: {
          READY: string;
          PLAY: string;
          PAUSE: string;
        };
      };
    };
  }
}

interface SoundCloudPlayerProps {
  code: string
}

export default function SoundCloudPlayer({ code }: SoundCloudPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement | null>(null)
  const widgetRef = useRef<SoundCloudWidget | null>(null)
  
  const [playing, setPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [position, setPosition] = useState(0)
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [art, setArt] = useState("")
  const [volume, setVolume] = useState(80)

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const script = document.createElement("script")
    script.src = "https://w.soundcloud.com/player/api.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const SC = window.SC
      widgetRef.current = SC.Widget(iframeRef.current)

      widgetRef.current.bind(SC.Widget.Events.READY, () => {
        widgetRef.current?.getDuration((d: number) => setDuration(d))

        widgetRef.current?.getCurrentSound((sound: SoundCloudSound) => {
          setTitle(sound.title)
          setArtist(sound.user.username)
          setArt(sound.artwork_url?.replace("large", "t500x500") || "")
        })

        widgetRef.current?.setVolume(volume)

        intervalId = setInterval(() => {
          widgetRef.current?.getPosition((p: number) => setPosition(p))
        }, 400)
      })

      widgetRef.current.bind(SC.Widget.Events.PLAY, () => setPlaying(true))
      widgetRef.current.bind(SC.Widget.Events.PAUSE, () => setPlaying(false))
    }

    return () => {
      if (intervalId) clearInterval(intervalId)
    }
  }, [])

  const toggle = () => {
    if (!widgetRef.current) return
    playing ? widgetRef.current.pause() : widgetRef.current.play()
  }

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!widgetRef.current) return
    const rect = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    widgetRef.current.seekTo(duration * percent)
  }

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value)
    setVolume(v)
    widgetRef.current?.setVolume(v)
  }

  const format = (ms: number) => {
    const total = Math.floor(ms / 1000)
    const min = Math.floor(total / 60)
    const sec = total % 60
    return `${min}:${sec.toString().padStart(2, "0")}`
  }

  const progress = duration ? (position / duration) * 100 : 0

  return (
    <div className="relative w-full max-w-[700px] mx-auto rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900">
      {art && (
        <div
          className="absolute inset-0 opacity-20 blur-3xl scale-110"
          style={{ backgroundImage: `url(${art})`, backgroundSize: "cover" }}
        />
      )}

      <iframe
        ref={iframeRef}
        className="hidden"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/${code}`}
        title="SoundCloud Audio Player"
      />

      <div className="relative flex gap-4 p-2 items-center">
        <div className="relative w-28 h-28 shrink-0">
          <img
            src={art}
            alt={title || "Track artwork"}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col flex-1 overflow-hidden">
          <span className="text-white font-semibold text-sm truncate">
            {title || "Loading track..."}
          </span>

          <span className="text-neutral-400 text-xs mb-3">
            {artist ? artist : 'Loading track...'}
          </span>

          <div
            onClick={seek}
            className="w-full h-2 bg-neutral-700/60 rounded-full cursor-pointer overflow-hidden"
          >
            <div
              className="h-full bg-white transition-all duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between text-[10px] text-neutral-400 mt-1">
            <span>{format(position)}</span>
            <span>{format(duration)}</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <button
            onClick={toggle}
            className="w-14 h-14 rounded-2xl bg-white text-black flex items-center cursor-pointer justify-center text-xl hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition"
          >
            {playing ? "❚❚" : "▶"}
          </button>

          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={changeVolume}
            className="w-20 accent-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}