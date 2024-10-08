import { Product } from "@/infrastructure/interfaces/products";
import {
  ParagraphSectionText,
  SectionTitle,
} from "@/presentation/components/ui/texts/page";

export default function ProductCardSingle(props: Product) {
  return (
    <div
      style={{ backgroundColor: props.bg }}
      className={`group p-4 max rounded-lg text-[4rem] items-center flex justify-between h-auto select-none pt-5 flex-col py-5 max-w-screen-lg w-full`}>
      <SectionTitle className="mb-10 mt-5 text-center text-white">
        {props.title}
      </SectionTitle>
      <div className="flex flex-col items-center justify-between xl:flex-row xl:items-start">
        <div className="relative w-full h-full max-w-md overflow-hidden mb-10 xl:mb-0 bg-white">
          <img
            src={"/" + props.url}
            alt={props.title}
            className="w-full h-full object-contain transition-[transform,opacity] duration-300    hover:scale-90"
          />
        </div>

        <div className="lg:ml-10 flex flex-col items-left mt-5 xl:mt-0 px-2 w-full">
          <ParagraphSectionText className="mb-5 text-white">
            {props.description}
          </ParagraphSectionText>
          {props.stats.map((text, index) => {
            return (
              <ParagraphSectionText className="text-white" key={index}>
                ‣ {text}
              </ParagraphSectionText>
            );
          })}
        </div>
      </div>
    </div>
  );
}
