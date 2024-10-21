"use client";
import { useState, useRef, useEffect } from "react";
import {
  ParagraphSectionText,
  SectionTitleColoured,
} from "../../ui/texts/page";
import InfoSection from "../../ui/infoSection/page";

export default function EmpresaComponent() {
  const [visibleParagraphs, setVisibleParagraphs] = useState<number[]>([]);
  const paragraphRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = paragraphRefs.current.indexOf(
              entry.target as HTMLParagraphElement
            );
            if (!visibleParagraphs.includes(index)) {
              setVisibleParagraphs((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    paragraphRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      paragraphRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [visibleParagraphs]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  const animationDelays = [0, 0.3, 0.6];

  return (
    <section className="mt-[7rem] mb-[3rem] flex flex-col items-center justify-center p-2 lg:p-5 max-w-xl lg:max-w-3xl xl:max-w-screen-lg m-auto">
      <InfoSection title="empresa" subtitle="sobre nosotros" />
      <div className="group px-2 lg:px-5 mb-5">
        {[0, 1, 2].map((index) => (
          <ParagraphSectionText
            ref={(el) => {
              paragraphRefs.current[index] = el;
            }}
            key={index}
            className={`mb-5 ${
              visibleParagraphs.includes(index)
                ? "animate-fadeLeft"
                : "opacity-1"
            }`}
            style={{ animationDelay: `${animationDelays[index]}s` }}>
            {index === 0
              ? "Post Cosecha S.R.L. es una empresa dedicada a la producción, importación y comercialización de productos específicos para el control de plagas de los granos almacenados."
              : index === 1
              ? "La investigación de nuevos productos, sumados a nuestra línea tradicional, son nuestra respuesta a las necesidades que impone un mercado en creciente expansión, al cual venimos proveyendo desde hace 30 años con un alto compromiso de calidad y distribución."
              : "Con representantes en todo el país, Post Cosecha S.R.L. garantiza una red de distribución inmediata para asegurarle un mejor servicio al cliente."}
          </ParagraphSectionText>
        ))}
      </div>
      <div className="w-full items-center">
        <SectionTitleColoured className="my-6 w-full text-center">
          Nuestra Misión
        </SectionTitleColoured>
      </div>
      <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-5 mt-10 px-2 lg:px-5">
        <div className="relative xl:w-1/2">
          <ParagraphSectionText
            ref={(el) => {
              paragraphRefs.current[3] = el;
            }}
            className={` relative z-10 ${
              visibleParagraphs.includes(3) ? "animate-fadeUp" : "opacity-0"
            }`}>
            Apuntamos a ser una organización
            <span className="font-bold"> líder</span> en el mercado, tanto por
            su calidad como por su confiabilidad. Es por ello que brindamos
            soluciones{" "}
            <span className="font-semibold">sustentables y eficientes</span>{" "}
            para afrontar las crecientes necesidades del mercado agronómico,
            otorgando a través de nuestros productos, la{" "}
            <span className="font-semibold">protección</span> que las cosechas
            necesitan, <span>cuidando el medio ambiente</span> y acompañando el
            crecimiento de nuestros clientes.
          </ParagraphSectionText>
          <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-white to-green-100 opacity-10 rounded-lg pointer-events-none z-0"></div>
        </div>

        <div className="w-full xl:lg:w-1/2 px-5 xl:px-0 mt-10 xl:mt-0">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            preload="auto"
            src="/video/seeds.mp4"
            className="rounded-lg shadow-lg w-full"></video>
        </div>
      </div>
    </section>
  );
}
