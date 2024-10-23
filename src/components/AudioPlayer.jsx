import React, { useEffect } from "react"

function AudioPlayer() {
  useEffect(() => {
    const audio = new Audio("/audio.mp3")
    audio.play()

    return () => {
      audio.pause()
      audio.currentTime = 0 
    }
  }, [])

    return null;
}

export default AudioPlayer
