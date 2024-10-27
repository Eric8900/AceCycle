"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface BlurInProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
  delay?: number;
  margin?: string;
  once?: boolean;
}

const BlurIn = ({ 
  children, 
  className, 
  variant, 
  duration = 1, 
  delay = 0,
  margin = "0px",
  once = true 
}: BlurInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin,
    once
  });

  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration, delay }}
      variants={combinedVariants}
      className={cn(
        "drop-shadow-sm",
        className,
      )}
    >
      {children}
    </motion.h1>
  );
};

export default BlurIn;