import { Product } from "@/infrastructure/interfaces/products";
import {
  ParagraphSectionText,
  SectionTitle,
} from "@/presentation/components/ui/texts/page";

export default function ProductCardSingle(props: Product) {
  return (
    <div
      className={`group md:p-4 max rounded-lg text-[4rem] items-center flex justify-between h-auto select-none pt-5 flex-col py-5 max-w-screen-lg w-full`}>
      <div className="flex flex-col  justify-between xl:items-start">
        <div className="relative w-full h-full max-w-md overflow-hidden mb-10 xl:mb-0 bg-white m-auto">
          <img
            src={"/" + props.url}
            alt={props.title}
            className="w-full h-full object-contain transition-[transform,opacity] duration-300    hover:scale-90"
          />
        </div>
        <SectionTitle className="mb-10 mt-5 text-left text-black ">
          {props.title}
        </SectionTitle>

        <div className=" flex flex-col items-left mt-5 xl:mt-0  w-full">
          <ParagraphSectionText className="mb-5 text-black">
            {props.description}
          </ParagraphSectionText>
          {props.stats.map((text, index) => {
            return (
              <ParagraphSectionText className="text-black" key={index}>
                ‣ {text}
              </ParagraphSectionText>
            );
          })}
        </div>
      </div>
    </div>
  );
}
