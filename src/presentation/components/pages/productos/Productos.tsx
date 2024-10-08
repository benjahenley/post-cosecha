"use client";

import { useState, useRef, useEffect } from "react";

import { SectionSubTitle, SectionTitle } from "../../ui/texts/page";
import EmblaCarousel from "../../carrousel/EmblaCarousel";
import { PRODUCTS } from "@/infrastructure/lists/products";
import InfoSection from "../../ui/infoSection/page";

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
      <section className="pt-[7rem] mb-[3rem] md:mt-[7rem] flex flex-col items-center justify-center p-2 lg:p-5 max-w-xl lg:max-w-3xl xl:max-w-screen-lg m-auto">
        <InfoSection
          title="productos"
          subtitle="compre ahora"
          style={{ marginBottom: 0 }}
        />
        <div className="flex flex-wrap items-center xl:flex-row-reverse gap-14 justify-center">
          <EmblaCarousel slides={PRODUCTS}></EmblaCarousel>
        </div>
      </section>
    </div>
  );
}
