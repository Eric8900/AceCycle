'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

interface MediaHeroProps {
  src: string;
  children: React.ReactNode;
  height?: string;
}

export function MediaHero ({
  src,
  children,
  height = '200vh'
}: MediaHeroProps) {
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
          (
            <img
              className="h-full w-full object-cover"
              width={1920}
              height={1080}
              src={src}
              alt="Hero background"
            />
          )
        </motion.div>

        <motion.div
          className="absolute inset-0"
          style={{ opacity }}
        />

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
