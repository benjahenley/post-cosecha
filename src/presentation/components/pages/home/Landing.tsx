"use client";

import { useEffect, useState } from "react";
import { ParagraphText, Title } from "@/presentation/components/ui/texts/page";
import { RedButton } from "../../ui/buttons/page";

interface CardProps {
  className?: string;
  onSubmit?: any;
}

export default function HomeLanding({ className, onSubmit }: CardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in and slide-up animation when the component is mounted
    setIsVisible(true);
  }, []);

  const fadeInClass = isVisible ? "animate-fadeIn" : "opacity-0";
  const slideUpClass = isVisible ? "animate-slideUp" : "opacity-0"; // Add slide up class for button

  return (
    <>
      <div
        id="hero-section"
        className="bg-opacity-80 bg-black fixed top-0 left-0 z-[-1] right-0 w-full h-[100vh]">
        <video
          src="/video/banner.mp4"
          className="absolute top-0 left-0 w-full h-full object-cover z-1 bg-white opacity-50"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
      <div
        className={`${className} flex flex-col pt-[10rem] md:pt-[12rem] xl:pt-[13rem] justify-between items-center pb-[5rem]`}>
        <div>
          <Title className={`text-center ${fadeInClass}`}>POST COSECHA</Title>
          <ParagraphText
            color="white"
            className={`max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl text-center mt-4 px-5 md:px-12 m-auto ${fadeInClass}`}>
            Soluciones sustentables y eficientes para afrontar las crecientes
            necesidades del mercado agronómico.
          </ParagraphText>
        </div>
        <RedButton className={`mt-5 ${slideUpClass}`} href="/productos">
          Ver Productos
        </RedButton>
      </div>
    </>
  );
}
