"use client";
import React, {
    useEffect,
    useState
} from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

interface CarouselProps {
    items: JSX.Element[];
    initialScroll?: number;
}

type Card = {
    src: string;
    title: string;
};

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className="relative w-full">
            <div
                className="flex w-full overflow-x-scroll overscroll-x-auto py-10 md:py-20 scroll-smooth [scrollbar-width:none] no-scrollbar"
                ref={carouselRef}
                onScroll={checkScrollability}
            >
                <div
                    className={cn(
                        "flex flex-row justify-start gap-4 pl-4",
                        "max-w-7xl mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
                    )}
                >
                    {items.map((item, index) => (
                        <motion.div
                            initial={{
                                opacity: 0,
                                y: 20,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 0.5,
                                    delay: 0.2 * index,
                                    ease: "easeOut",
                                    once: true,
                                },
                            }}
                            key={"card" + index}
                            className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
                        >
                            {item}
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end gap-2 mr-10">
                <button
                    className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                    onClick={scrollLeft}
                    disabled={!canScrollLeft}
                >
                    <ArrowLeftIcon className="h-6 w-6 text-gray-500" />
                </button>
                <button
                    className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50"
                    onClick={scrollRight}
                    disabled={!canScrollRight}
                >
                    <ArrowRightIcon className="h-6 w-6 text-gray-500" />
                </button>
            </div>
        </div>
    );
};

export const Card = ({
    card,
    layout = false,
}: {
    card: Card;
    layout?: boolean;
}) => {
    return (
        <>
            <motion.div
                layoutId={layout ? `card-${card.title}` : undefined}
                className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative z-10"
            >
                <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
                <div className="relative z-40 p-8">
                </div>
                <BlurImage
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover absolute z-10 inset-0"
                />
            </motion.div>
        </>
    );
};

export const BlurImage = ({
    height,
    width,
    src,
    className,
    alt,
    ...rest
}: {
    src: string;
    alt: string;
    fill?: boolean;
    blurDataURL?: string;
    className?: string;
    height?: number;
    width?: number;
}) => {
    const [isLoading, setLoading] = useState(true);
    return (
        <img
            className={cn(
                "transition duration-300 w-full h-full",
                isLoading ? "blur-sm" : "blur-0",
                className
            )}
            onLoad={() => setLoading(false)}
            src={src}
            width={width}
            height={height}
            loading="lazy"
            decoding="async"
            blurDataURL={typeof src === "string" ? src : undefined}
            alt={alt ? alt : "Background of a beautiful view"}
            {...rest}
        />
    );
};