"use client";

import { useEffect, useRef, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  SectionTitleColoured,
  ParagraphSectionText,
} from "../../ui/texts/page";

interface CardProps {
  className?: string;
}

const OPTIONS: EmblaOptionsType = {};

export default function MissionStatement({ className }: CardProps) {
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  // Intersection Observer to trigger animations when elements are in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === titleRef.current) {
              setIsTitleVisible(true);
            } else if (entry.target === paragraphRef.current) {
              setIsParagraphVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);

    return () => {
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
    };
  }, []);

  return (
    <div
      className={
        className +
        " relative bg-lightGray flex flex-row w-full justify-center h-auto py-10 md:py-20"
      }>
      <div className="relative max-w-screen-xl md:px-10 flex flex-col md:flex-row-reverse items-center justify-center gap-5 max-h-lg w-full z-2">
        <div className="w-full max-w-md sm:m-auto md:m-0 md:max-w-md lg:max-w-lg xl:max-w-xl px-5 flex flex-col gap-2">
          <SectionTitleColoured
            ref={titleRef}
            className={`${isTitleVisible ? "animate-fadeLeft" : "opacity-0"}`}>
            Comenzando por el suelo, acompañandote hasta el producto final.
          </SectionTitleColoured>
          <ParagraphSectionText
            ref={paragraphRef}
            className={`${
              isParagraphVisible ? "animate-fadeUp" : "opacity-0"
            } mt-2`}>
            Desde el momento en que la cosecha es recogida hasta que el producto
            final llega a su destino, estamos a tu lado en cada etapa del
            proceso. Nos aseguramos de que cada paso cuente con el respaldo
            necesario para mantener la calidad y proteger tu inversión.
          </ParagraphSectionText>
        </div>
        <div className="overflow-hidden w-auto z-10 px-4 mt-5 py-5">
          <img
            src={"img/seeds1.jpg"}
            className="rounded-3xl border-black z-1 max-h-[300px]"
            style={{ boxShadow: "-5px 5px 15px black" }}
            alt="Seeds"
          />
        </div>
      </div>
      <div className="overflow-hidden h-[20%] w-full md:w-[40%] md:h-full absolute md:top-0 left-0 bottom-0 bg-black bg-opacity-40">
        <img
          src="img/crops.png"
          className="opacity-60 w-full h-full object-cover"></img>
      </div>
    </div>
  );
}
