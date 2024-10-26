"use client";
import React from "react";
import { Button } from "@/components/ui/button"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import BlurIn from "./blur-in";

export const HeroParallax = ({
  products,
}: {
  products: {
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[330vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={index}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={index}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product, index) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="flex flex-col z-10 max-w-7xl relative mx-auto py-5 md:py-40 px-4 text-center items-center xl:text-left xl:items-start xl:justify-start w-full left-0 top-0">
      <BlurIn className="text-6xl md:text-7xl font-extrabold dark:text-white">
        Reduce, Reuse, <b className="bg-gradient-to-r from-lime-400 to-lime-500 bg-clip-text text-transparent">AceCycle</b>
      </BlurIn>
      <BlurIn delay={0.4} className="max-w-xl text-xl md:text-2xl font-light drop-shadow-2xl my-8 dark:text-neutral-200">
        We are an international non-profit founded in 2022 committed to recycling tennis balls globally.
      </BlurIn>
      <BlurIn delay={0.8}>
        <a
          className="inline-flex h-9 w-max items-center justify-center rounded-md"
          href="/about/"
        >
          <Button className="max-w-2xl rounded-xl text-xl md:text-3xl md:p-8 p-6 dark:text-neutral-200">
            Learn More

          </Button>
        </a>
      </BlurIn>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      className="h-96 w-[30rem] relative flex-shrink-0"
    >
      <img
        src={product.thumbnail}
        className="object-contain object-left-top absolute h-full w-full inset-0"
        alt="Product thumbnail"
      />
    </motion.div>
  );
};