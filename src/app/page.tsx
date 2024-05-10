"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import useMousePosition from "@/hooks/use-mouse-position";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();

  const maskSize = isHovered ? 400 : 40;

  return (
    <main className="h-screen">
      <motion.div
        style={{
          maskImage: "url('./circle.svg')",
          maskRepeat: "no-repeat",
          maskSize: `${maskSize}px`,
        }}
        animate={{
          WebkitMaskPosition: `${x - maskSize / 2}px ${y - maskSize / 2}px`,
          WebkitMaskSize: `${maskSize}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
        className="absolute flex size-full cursor-default items-center justify-center bg-red-400 text-[64px] leading-[66px] text-black"
      >
        <p
          className="w-[1000px]"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          A visual designer - with skills that haven&apos;t been replaced by AI
          (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>

      <div className="flex size-full cursor-default items-center justify-center text-[64px] leading-[66px] text-red-200">
        <p className="w-[1000px]">
          I&apos;m a <span className="text-red-400">selectively skilled</span>{" "}
          product designer with strong focus on producing high quality &
          impactful digital experience.
        </p>
      </div>
    </main>
  );
}
