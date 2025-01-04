'use client';
import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

interface MediaHeroProps {
  mediaType: string;
  src: string;
  children: React.ReactNode;
  height?: string;
}

export function MediaHero ({
  mediaType = 'image',
  src,
  children,
  height = '200vh'
}: MediaHeroProps) {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.90]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const { scrollYProgress: scrollYProgressB } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const brightness = useTransform(scrollYProgressB, [0, 1], [0.3, 1.3]);
  
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: targetRef,
    offset: ["start center", "end start"],
  });

  const textY = useTransform(scrollYProgress1, 
    [0, 0.2, 1], 
    [200, 0, -2000]
  );
  const textOpacity = useTransform(scrollYProgress1, 
    [0, 0.6, 0.7], 
    [1, 1, 0]
  );

  const togglePlay = () => {
    if (mediaType === 'video' && videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative" style={{ height }} ref={targetRef}>
      <motion.div
        style={{
          scale,
          height: "100vh",
        }}
        className="sticky top-0 w-full z-0"
      >
        <motion.div
          style={{
            filter: useTransform(brightness, (value) => `brightness(${value})`),
            height: "100%",
            width: "100%"
          }}
        >
          {mediaType === 'video' ? (
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              src={src}
            />
          ) : (
            <img
              className="h-full w-full object-cover"
              width={1920}
              height={1080}
              src={src}
              alt="Hero background"
            />
          )}
        </motion.div>

        <motion.div
          className="absolute inset-0"
          style={{ opacity }}
        />

        {mediaType === 'video' && (
          <div className="absolute top-0 right-0 p-4 z-50">
            <button
              onClick={togglePlay}
              className="rounded-full bg-black bg-opacity-40 p-3 hover:bg-opacity-60 transition-all cursor-pointer"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>
        )}

        <motion.div
          style={{
            y: textY,
            opacity: textOpacity,
          }}
          className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center text-white"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
