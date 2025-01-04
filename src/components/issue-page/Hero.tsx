'use client'
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    const maskSize = useTransform(
        scrollYProgress,
        [0, 1],
        ['80%', '180%']
    );

    const brightness = useTransform(
        scrollYProgress,
        [0, 1],
        [0.5, 1]
    );

    return (
        <main>
            <div ref={container} className="relative h-[300vh]">
                <motion.div
                    className="flex overflow-hidden sticky top-0 h-[100vh] items-center justify-center"
                    style={{
                        maskImage: 'url(/mask.svg)',
                        maskPosition: '51.5% center',
                        maskRepeat: 'no-repeat',
                        WebkitMaskImage: 'url(/mask.svg)',
                        WebkitMaskPosition: '51.5% center',
                        WebkitMaskRepeat: 'no-repeat',
                        maskSize,
                        WebkitMaskSize: maskSize
                    }}
                >
                    <motion.video
                        autoPlay
                        muted
                        loop
                        className="h-full w-full object-cover"
                        style={{
                            filter: useTransform(brightness, value => `brightness(${value})`)
                        }}
                    >
                        <source src="https://videos.pexels.com/video-files/3186589/3186589-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    </motion.video>
                </motion.div>
            </div>
        </main>
    );
}