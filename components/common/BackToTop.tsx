// components/common/BackToTop.tsx
"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import BackToTopBtn from "@/public/assets/images/backtotop.svg";
import Image from "next/image";

interface BackToTopProps {
  scrollThreshold?: number;
  className?: string;
}

const BackToTop: React.FC<BackToTopProps> = ({
  scrollThreshold = 300,
  className = "",
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollThreshold]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      aria-label="Back to top"
      onClick={handleClick}
      className={clsx(
        "fixed bottom-6 right-6 z-50 animate-bounce",
        "md:bottom-8 md:right-8",
        "lg:bottom-10 lg:right-10",
        className
      )}
    >
      <Image
        src={BackToTopBtn}
        alt="BackToTopBtn"
        width={50}
        height={50}
      />

    </button>
  );
};

export default BackToTop;
