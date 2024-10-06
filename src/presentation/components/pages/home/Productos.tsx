import { Product } from "@/infrastructure/interfaces/products";
import ProductCard from "../../ui/product-card/page";
import {
  ParagraphSectionText,
  SectionSubTitle,
  SectionTitle,
} from "../../ui/texts/page";
import EmblaCarousel from "../../carrousel/EmblaCarousel";
import { PRODUCTS } from "@/infrastructure/lists/products";

interface CardProps {
  className?: string;
}

export default function Productos({ className }: CardProps) {
  return (
    <div className={className}>
      <section className="py-10 md:py-20 grid items-center text-center justify-center w-full m-auto ">
        <div className="flex flex-col items-center mb-5 xl:mb-10">
          <SectionSubTitle className="mb-0 md:mb-5">
            Compre ahora
          </SectionSubTitle>
          <SectionTitle>Productos</SectionTitle>
          <img src="/img/text-decor/wing.png" className="h-20"></img>
        </div>

        <div className="flex flex-wrap items-center xl:flex-row-reverse gap-14 justify-center">
          <EmblaCarousel slides={PRODUCTS}></EmblaCarousel>
        </div>
      </section>
    </div>
  );
}
