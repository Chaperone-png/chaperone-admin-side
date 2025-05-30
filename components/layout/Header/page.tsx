"use client";
import { useEffect, useState } from "react";
import "./header.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import logoImage from "@/public/logo.png"; 

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 40) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <header className="bg-white py-3 shadow">
      <div className="mx-auto max-w-7xl flex items-center justify-center gap-3 responsive-px-15">
        <Image
          src={logoImage}
          alt="Chaperone Logo"
          width={40}
          height={40}
          priority={true}
        />
        <h1 className="text-xl font-semibold text-black">
          Chaperone Plants Admin
        </h1>
      </div>
    </header>
  );
};

