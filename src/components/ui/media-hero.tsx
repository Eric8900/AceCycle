'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

interface MediaHeroProps {
    src: string;
    children: React.ReactNode;
    height?: string;
}

export function MediaHero({
    src,
    children,
    height = '200vh'
}: MediaHeroProps) {
    const targetRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, 
        [0.5, 1], 
        [1, 0.90],
        { clamp: true }
    );
    
    const opacity = useTransform(scrollYProgress,
        [0.5, 1],
        [1, 0],
        { clamp: true }
    );

    const brightness = useTransform(scrollYProgress,
        [0, 1],
        [0.3, 1.3],
        { clamp: true }
    );

    const textY = useTransform(scrollYProgress,
        [0, 0.2, 0.8],
        [200, 0, -1000],
        { clamp: true }
    );

    const textOpacity = useTransform(scrollYProgress,
        [0, 0.6, 0.7],
        [1, 1, 0],
        { clamp: true }
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
                        width: "100%",
                        willChange: 'filter'
                    }}
                >
                    <img
                        className="h-full w-full object-cover"
                        width={1920}
                        height={1080}
                        src={src}
                        alt="Hero background"
                        loading="eager"
                        decoding="sync"
                    />
                </motion.div>

                <motion.div
                    className="absolute inset-0"
                    style={{ opacity }}
                />

                <motion.div
                    style={{
                        transform: useTransform(textY, y => `translateY(${y}px)`),
                        opacity: textOpacity,
                        willChange: 'transform, opacity'
                    }}
                    className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center text-white"
                >
                    {children}
                </motion.div>
            </motion.div>
        </div>
    );
}