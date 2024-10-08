import { useEffect, useRef, useState } from "react";
import { Product } from "@/infrastructure/interfaces/products";
import {
  ParagraphSectionText,
  TextAllwaysBlack,
} from "@/presentation/components/ui/texts/page";

export default function ProductCard(props: Product) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        backgroundColor: props.bg,
      }}
      className={`${
        isVisible ? "animate-fadeDown" : "opacity-0"
      } shadow-[-5px_4px_3px_rgba(128,128,128,0.8)] hover:shadow-[-1px_2px_1px_rgba(128,128,128,0.8)] hover:scale-[.99] transition-[shadow,scale] transition-scale duration-500 group cursor-pointer hover:text-white bg-opacity-10 p-4 max rounded-lg text-[4rem] font-semibold flex items-center justify-center h-auto select-none pt-5 flex-col py-5`}>
      <TextAllwaysBlack className="mb-5 uppercase group-hover:font-semibold tracking-wider">
        {props.title}
      </TextAllwaysBlack>
      <div className="bg-white relative group w-full h-full max-h-[20rem] overflow-hidden">
        <img
          alt={props.title}
          src={props.url}
          className=" w-full h-full object-contain hover:size-3 transition-[opacity,transform] group-hover:opacity-90 group-hover:scale-90 duration-300 origin-center"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-100 group-hover:opacity-100">
          <span className="text-white text-lg font-bold hover:text-opacity-80">
            Vér
          </span>
        </div>
      </div>

      <div className="text-center flex flex-col items-center mt-5 px-2">
        {props.stats.map((text, index) => (
          <ParagraphSectionText key={index}>‣ {text}</ParagraphSectionText>
        ))}
      </div>
    </div>
  );
}
