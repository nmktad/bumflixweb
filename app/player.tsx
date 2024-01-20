'use client'

import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function Player() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    const hls = new Hls();

    hls.loadSource("http://localhost:8080/partition/index.m3u8");
    hls.attachMedia(videoRef.current);

    return () => {
      hls.destroy();
    }
  }, []);

  return (
    <video ref={videoRef} controls className="h-screen" />
  );
}
