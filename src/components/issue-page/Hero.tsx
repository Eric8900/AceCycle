'use client'
import { useEffect, useRef } from 'react';

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const stickyMask = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const easing = 0.15;
    let easedScrollProgress = 0;

    const initialMaskSize = 0.8;
    const targetMaskSize = 100;
    const initialBrightness = 0.5;
    const targetBrightness = 1;

    useEffect(() => {
        requestAnimationFrame(animate)
        console.log("hi")
    })

    const getScrollProgress = () => {
        if (!stickyMask.current || !container.current) return 0;

        const scrollProgress = stickyMask.current.offsetTop / (container.current.getBoundingClientRect().height - window.innerHeight)
        const delta = scrollProgress - easedScrollProgress;
        easedScrollProgress += delta * easing;
        return easedScrollProgress
    }

    const animate = () => {
        if (!stickyMask.current || !videoRef.current) return;

        const progress = getScrollProgress();
        const maskSizeProgress = targetMaskSize * progress;

        stickyMask.current.style.webkitMaskSize = (initialMaskSize + maskSizeProgress) * 100 + "%";

        const brightnessProgress = progress * (targetBrightness - initialBrightness);
        const currentBrightness = initialBrightness + brightnessProgress;
        videoRef.current.style.filter = `brightness(${currentBrightness})`;

        requestAnimationFrame(animate)
    }

    return (
        <main className="">
            <div ref={container} className="relative h-[300vh]">
                <div
                    ref={stickyMask}
                    className="flex overflow-hidden sticky top-0 h-[100vh] items-center justify-center"
                    style={{
                        maskImage: 'url(/mask.svg)',
                        maskPosition: '51.5% center',
                        maskRepeat: 'no-repeat',
                        maskSize: '80%',
                        WebkitMaskImage: 'url(/mask.svg)',
                        WebkitMaskPosition: '51.5% center',
                        WebkitMaskRepeat: 'no-repeat',
                        WebkitMaskSize: '80%'
                    }}
                >
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        className="h-full w-full object-cover"
                        style={{ filter: 'brightness(0.9)' }}
                    >
                        <source src="https://videos.pexels.com/video-files/3186589/3186589-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
        </main>
    );
}