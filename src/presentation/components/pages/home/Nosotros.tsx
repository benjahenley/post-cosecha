"use client";
import { useState, useRef, useEffect } from "react";
import { RedButtonComplement } from "../../ui/buttons/page";
import { ParagraphSectionText } from "../../ui/texts/page";
import InfoSection from "../../ui/infoSection/page";

interface CardProps {
  className?: string;
}

export default function Nosotros({ className }: CardProps) {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const isProd = process.env.NODE_ENV !== "production" && "/";
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target === textRef.current) {
            setIsTextVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  const [transform, setTransform] = useState("none");
  const [boxShadow, setBoxShadow] = useState(
    "10px 10px 20px rgba(0, 0, 0, 0.2)"
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const xPos = ((e.clientX - left) / width) * 2 - 1;
    const yPos = ((e.clientY - top) / height) * 2 - 1;

    setTransform(
      `perspective(1000px) rotateX(${yPos * 10}deg) rotateY(${
        xPos * 10
      }deg) translateZ(${yPos * -10}px)`
    );
    const shadowX = xPos * -15;
    const shadowY = yPos * 15;
    const blur = 30 - Math.abs(yPos) * 10;
    const opacity = 0.3 + Math.abs(yPos) * 0.3;

    setBoxShadow(
      `${shadowX}px ${shadowY}px ${blur}px rgba(0, 0, 0, ${opacity})`
    );
  };

  const handleMouseLeave = () => {
    setTransform("none");
    setBoxShadow("10px 10px 20px rgba(0, 0, 0, 0.2)");
  };

  return (
    <div className={className}>
      <section className="py-10 md:py-20 flex flex-col items-center w-full m-auto max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-screen-lg px-2">
        {/* InfoSection with title and subtitle */}
        <InfoSection title="Sobre Nosotros" subtitle="Empresa" />

        <div className="relative flex flex-col-reverse xl:flex-row-reverse gap-5 items-start">
          {/* Interactive Image on the right */}
          <a
            className="w-full h-full overflow-hidden"
            href="/empresa"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: transform,
              boxShadow: boxShadow,
              willChange: "transform", // Optimize rendering
            }}>
            <div className="rounded-3xl w-full h-full">
              <img
                src="img/leaves3.jpg"
                className={`${
                  isTextVisible ? "animate-fadeIn" : "opacity-0"
                } hidden xl:block max-h-[34rem] w-full h-full`}
              />
            </div>
          </a>

          {/* Static Image for mobile */}
          <img
            src={"img/leaves.jpg"}
            className="xl:hidden max-h-[34rem] rounded-3xl"
          />

          <div className="flex flex-col items-end h-full w-full">
            {/* Paragraph Text */}
            <ParagraphSectionText
              ref={textRef}
              className={`text-center xl:text-right xl:max-w-md px-0 text-pretty ${
                isTextVisible ? "animate-fadeUp" : "opacity-0"
              }`}>
              Post Cosecha S.R.L. es una empresa dedicada a la producción,
              importación y comercialización de productos específicos para el
              control de plagas de los granos almacenados. <br /> <br /> La
              investigación de nuevos productos, sumados a nuestra línea
              tradicional, son nuestra respuesta a las necesidades que impone un
              mercado en creciente expansión, al cual venimos proveyendo desde
              hace 30 años con un alto compromiso de calidad y distribución.
              <br /> <br /> Con representantes en todo el país, Post Cosecha
              S.R.L. garantiza una red de distribución inmediata para asegurarle
              un mejor servicio al cliente.
            </ParagraphSectionText>

            {/* Button */}
            <RedButtonComplement
              href="/empresa"
              className={`${
                isTextVisible ? "animate-fadeUp" : "opacity-0"
              } flex items-center justify-center xl:justify-end mt-5 text-center md:text-right w-full`}>
              Saber Más
            </RedButtonComplement>
          </div>
        </div>
      </section>
    </div>
  );
}
