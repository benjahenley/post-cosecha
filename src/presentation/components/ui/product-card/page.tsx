import { useEffect, useRef, useState } from "react";
import { Product } from "@/infrastructure/interfaces/products";
import { TextAllwaysBlack } from "@/presentation/components/ui/texts/page";

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
      className={`${
        isVisible ? "animate-fadeDown" : "opacity-0"
      }   hover:scale-[.99] transition-[shadow,scale,bg,bg-opacity] hover:bg-black hover:bg-opacity-50 transition-scale duration-500 group cursor-pointer bg-opacity-10 max rounded-lg text-[4rem] font-semibold flex items-center justify-center h-auto select-none pt-5 flex-col py-5 `}>
      <div className="p-4">
        <div className=" bg-white relative group w-full h-full max-h-[20rem] overflow-hidden rounded-full">
          <img
            alt={props.title}
            src={"/" + props.url}
            className="p-10 w-full h-full object-contain hover:size-3 transition-[opacity,transform] group-hover:opacity-90 group-hover:scale-90 duration-300 origin-center filter-white-to-transparent"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-100 group-hover:opacity-100">
            {/* <span className="text-black text-lg font-bold text-center">
            Haga click para más información
          </span> */}
          </div>
        </div>
      </div>

      <TextAllwaysBlack className="text-center rounded-full border-2 border-black group-hover:border-white px-2 mt-5 uppercase group-hover:font-semibold tracking-wider group-hover:text-white">
        {props.title}
      </TextAllwaysBlack>

      {/* <div className="text-center flex flex-col items-center mt-5 px-2 group-hover:text-white">
        {props.stats.map((text, index) => (
          <ParagraphSectionText key={index}>‣ {text}</ParagraphSectionText>
        ))}
      </div> */}
    </div>
  );
}
