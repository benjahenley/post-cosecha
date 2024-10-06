"use client";

import React, { useState, useEffect } from "react";
import {
  AnimatedNavItem,
  TextWithLink,
} from "@/presentation/components/ui/texts/page";
import { BurguerIcon } from "@/assets/svg";

function NavbarAlternate() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scroll direction based on the current scroll position
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed right-0 left-0 z-[99] px-[1.25rem] md:px-[1.5rem] bg-black transition-transform duration-300 ease-in-out py-[0.5rem] ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <a
            href="/"
            className="leading-none text-3xl font-clash font-thin cursor-pointer text-foreground">
            <img
              className="w-[40px] md:w-[4rem]"
              src="/img/logo.jpg"
              alt="Logo"
            />
          </a>
        </div>

        <div className="w-full h-full hidden sm:flex flex-row md:items-center gap-5 justify-end max-w-lg">
          <ul className="h-full w-auto decoration-none flex flex-row items-center justify-end gap-[1rem] flex-grow">
            <AnimatedNavItem href="/empresa">Empresa</AnimatedNavItem>
            <AnimatedNavItem href="/productos">Productos</AnimatedNavItem>
            <AnimatedNavItem href="/contacto">Contacto</AnimatedNavItem>
          </ul>
        </div>

        <BurguerIcon
          className="block sm:hidden w-[2.5rem] h-[2.5rem] text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open menu"
        />
      </div>
      {isMenuOpen && (
        <div className="h-auto w-full sm:hidden my-5">
          <ul className="decoration-none flex flex-col items-center gap-5">
            <TextWithLink href="/empresa">Empresa</TextWithLink>
            <TextWithLink href="/productos">Productos</TextWithLink>
            <TextWithLink href="/contacto">Contacto</TextWithLink>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavbarAlternate;
