"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

interface BlurIntProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
  delay?: number;
}
const BlurIn = ({ children, className, variant, duration = 1, delay = 0 }: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration, delay }}
      variants={combinedVariants}
      className={cn(
        "tracking-[-0.02em] drop-shadow-sm md:leading-[5rem]",
        className,
      )}
    >
      {children}
    </motion.h1>
  );
};

export default BlurIn;