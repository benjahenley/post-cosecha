"use client";
import { useEffect, useRef, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  SectionTitle,
  SectionSubTitle,
  ParagraphSectionText,
} from "../../ui/texts/page";

interface CardProps {
  className?: string;
}

const OPTIONS: EmblaOptionsType = {};

export default function Message({ className }: CardProps) {
  const [isSubTitleVisible, setIsSubTitleVisible] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const subTitleRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === subTitleRef.current) {
              setIsSubTitleVisible(true);
            } else if (entry.target === titleRef.current) {
              setIsTitleVisible(true);
            } else if (entry.target === paragraphRef.current) {
              setIsParagraphVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (subTitleRef.current) observer.observe(subTitleRef.current);
    if (titleRef.current) observer.observe(titleRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);

    return () => {
      if (subTitleRef.current) observer.unobserve(subTitleRef.current);
      if (titleRef.current) observer.unobserve(titleRef.current);
      if (paragraphRef.current) observer.unobserve(paragraphRef.current);
    };
  }, []);

  return (
    <div className="w-full bg-white">
      <div
        className={
          className +
          " py-10 md:py-20 flex flex-col items-center w-full m-auto max-w-md md:max-w-lg lg:max-w-2xl px-2"
        }>
        <SectionSubTitle
          ref={subTitleRef}
          className={`mb-5 ${
            isSubTitleVisible ? "animate-fadeLeft" : "opacity-0"
          }`}>
          YA COSECHÓ?
        </SectionSubTitle>
        <SectionTitle
          ref={titleRef}
          className={`mb-5 md:mb-10 text-center ${
            isTitleVisible ? "animate-fadeRight" : "opacity-0"
          }`}>
          CONFÍE, LO DEMÁS ESTÁ EN NUESTRAS MANOS
        </SectionTitle>
        <ParagraphSectionText
          ref={paragraphRef}
          className={`text-center text-pretty ${
            isParagraphVisible ? "animate-fadeUp" : "opacity-0"
          }`}>
          La integridad, la transparencia y una sólida ética de trabajo son la
          base de nuestros valores. Nos enorgullece contribuir a la comunidad y
          al medio ambiente. Nuestro objetivo es dejar la tierra en mejores
          condiciones hoy para construir un futuro más prometedor para las
          generaciones venideras.
        </ParagraphSectionText>
      </div>
    </div>
  );
}
