"use client";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import ProductCard from "../ui/product-card/page";
import { Product } from "@/infrastructure/interfaces/products";
import { useRouter } from "next/navigation";
import Link from "next/link";

type PropType = {
  slides: Product[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const router = useRouter();

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla ">
      <div
        className="embla__viewport overflow-y-visible overflow-x-hidden pt-8"
        ref={emblaRef}>
        <div className="embla__container p-2">
          {slides.map((slide: Product, index) => {
            return (
              <Link
                className="embla__slide"
                key={index}
                href={`/productos/${slide.id}`}>
                <ProductCard {...slide}></ProductCard>
              </Link>
            );
          })}
        </div>
      </div>

      <div
        className="embla__controls p-2 items-center justify-center"
        style={{ alignItems: "center" }}>
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
