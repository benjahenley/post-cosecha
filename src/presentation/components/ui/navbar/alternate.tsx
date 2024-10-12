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

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }

      lastScrollY = currentScrollY;
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        event.target instanceof HTMLElement &&
        !event.target.closest("ul")
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

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
              className="w-[3.5rem] md:w-[4rem]"
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
          className="block sm:hidden w-[3.5rem] h-[3.5rem] text-white"
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
