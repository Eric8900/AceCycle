'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

interface ZoomingImageProps {
    src: string;
    children: React.ReactNode;
    height?: string;
}

export function ZoomingImage({
    src,
    children,
    height = '135vh'
}: ZoomingImageProps) {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };
        
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start 0.2", "start start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    const { scrollYProgress: scrollYProgress1 } = useScroll({
        target: targetRef,
        offset: ["center center", "end end"],
    });

    const textY = useTransform(
        scrollYProgress1,
        [0, 1],
        isSmallScreen ? [150, -10] : [-100, 0]
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
                        height: "100%",
                        width: "100%"
                    }}
                >
                    <img
                        className="h-full w-full object-cover"
                        width={1920}
                        height={1080}
                        src={src}
                        alt="background"
                    />
                </motion.div>

                <motion.div
                    className="absolute inset-0"
                />
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    y: textY,
                }}
                className="absolute left-0 top-0 flex h-full w-full flex-col sm:items-end sm:justify-end items-center justify-end text-white sm:p-[10vh] p-[5%]"
            >
                {children}
            </motion.div>
        </div>
    );
}
