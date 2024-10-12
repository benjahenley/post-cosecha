"use client";

import React, { useEffect, useState } from "react";
import {
  AnimatedNavItem,
  TextWithLink,
} from "@/presentation/components/ui/texts/page";
import { BurguerIcon } from "@/assets/svg";

function Navbar(props: any) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (currentScrollY > 700 && currentScrollY > lastScrollY) {
        setHideNavbar(true);
      } else if (currentScrollY < lastScrollY) {
        setHideNavbar(false);
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
      className={`fixed right-0 left-0 z-[99] px-[1.25rem] md:px-[1.5rem] transition-all duration-500 ease-in-out ${
        isMenuOpen ? "bg-black" : ""
      } ${scrolled ? "py-[0.5rem] bg-black" : "py-[1rem]"} ${
        hideNavbar ? "-translate-y-full" : "translate-y-0"
      }`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <a
            href="/"
            className={`${
              scrolled ? "text-white" : "text-black"
            } leading-none text-3xl font-clash font-thin cursor-pointer text-foreground transition-colors duration-500 ease-in-out`}>
            <img
              className="w-[3.5rem] md:w-[4rem]"
              src="/img/logo.jpg"
              alt="Logo"
            />
          </a>
        </div>

        <div className="w-full h-full hidden sm:flex flex-row md:items-center gap-5 justify-end max-w-lg">
          <ul className="h-full w-auto decoration-none flex flex-row items-center justify-end gap-[1rem] flex-grow">
            <AnimatedNavItem
              scrolled={scrolled}
              href="/empresa"
              style={{ animationDelay: "0.1s" }}>
              Empresa
            </AnimatedNavItem>
            <AnimatedNavItem
              scrolled={scrolled}
              href="/productos"
              style={{ animationDelay: "0.3s" }}>
              Productos
            </AnimatedNavItem>
            <AnimatedNavItem
              scrolled={scrolled}
              href="/contacto"
              style={{ animationDelay: "0.5s" }}>
              Contacto
            </AnimatedNavItem>
          </ul>
        </div>

        <BurguerIcon
          className={`block sm:hidden w-[3.5rem] h-[3.5rem] ${
            scrolled && "text-white"
          } transition-colors duration-500 ease-in-out`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open menu"
        />
      </div>
      {isMenuOpen && (
        <div className="h-auto w-full sm:hidden my-5">
          <ul className="decoration-none flex flex-col items-center gap-5">
            <TextWithLink scrolled={scrolled} href="/empresa">
              Empresa
            </TextWithLink>
            <TextWithLink scrolled={scrolled} href="/productos">
              Productos
            </TextWithLink>
            <TextWithLink scrolled={scrolled} href="/contacto">
              Contacto
            </TextWithLink>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
