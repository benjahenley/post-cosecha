"use client";

import { useState, useRef, useEffect } from "react";

import { SectionSubTitle, SectionTitle } from "../../ui/texts/page";
import EmblaCarousel from "../../carrousel/EmblaCarousel";
import { PRODUCTS } from "@/infrastructure/lists/products";

interface CardProps {
  className?: string;
}

export default function Productos({ className }: CardProps) {
  const [isSubTitleVisible, setIsSubTitleVisible] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  const subTitleRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === subTitleRef.current) {
              setIsSubTitleVisible(true);
            } else if (entry.target === titleRef.current) {
              setIsTitleVisible(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (subTitleRef.current) observer.observe(subTitleRef.current);
    if (titleRef.current) observer.observe(titleRef.current);

    return () => {
      if (subTitleRef.current) observer.unobserve(subTitleRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
    };
  }, []);

  return (
    <div className={className}>
      <section className="py-10 md:py-20 grid items-center text-center justify-center w-full m-auto ">
        <div className="flex flex-col items-center mb-5 xl:mb-10">
          <SectionSubTitle
            ref={subTitleRef}
            className={`mb-0 md:mb-5 ${
              isSubTitleVisible ? "animate-fadeLeft" : "opacity-0"
            }`}>
            Compre ahora
          </SectionSubTitle>
          <SectionTitle
            ref={titleRef}
            className={`${isTitleVisible ? "animate-fadeRight" : "opacity-0"}`}>
            Productos
          </SectionTitle>

          <img
            src="/img/text-decor/wing.png"
            className={`${
              isTitleVisible ? "animate-fadeIn" : "opacity-0"
            } h-20 mb-[-2rem]`}></img>
        </div>

        <div className="flex flex-wrap items-center xl:flex-row-reverse gap-14 justify-center">
          <EmblaCarousel slides={PRODUCTS}></EmblaCarousel>
        </div>
      </section>
    </div>
  );
}
