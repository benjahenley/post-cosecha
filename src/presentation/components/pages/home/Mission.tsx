"use client";

import { EmblaOptionsType } from "embla-carousel";

import {
  SectionTitle,
  Subtitle,
  Text,
  Title,
  SectionSubTitle,
  SectionTitleColoured,
  ParagraphSectionText,
} from "../../ui/texts/page";

interface CardProps {
  className?: string;
}

const OPTIONS: EmblaOptionsType = {};

export default function MissionStatement({ className }: CardProps) {
  return (
    <div
      className={
        className +
        " relative bg-lightGray flex flex-row w-full justify-center h-auto  py-20"
      }>
      <div className="relative max-w-screen-xl md:px-10 flex flex-col md:flex-row-reverse items-center justify-center gap-5 max-h-lg w-full z-2">
        <div className="w-full max-w-md sm:m-auto md:m-0 md:max-w-md lg:max-w-lg xl:max-w-xl px-5 flex flex-col gap-2">
          <SectionTitleColoured>
            Comenzando por el suelo, acompañandote hasta el producto final.
          </SectionTitleColoured>
          <ParagraphSectionText className="mt-2">
            La investigación de nuevos productos, sumados a nuestra línea
            tradicional, son nuestra respuesta a las necesidades que impone un
            mercado en creciente expansión, al cual venimos proveyendo desde
            hace 30 años con un alto compromiso de calidad y distribución.
          </ParagraphSectionText>
        </div>
        <div className="overflow-hidden w-auto z-10 px-4 mt-5 py-5">
          <img
            src="/img/seeds1.jpg"
            className="rounded-3xl  border-black z-1 max-h-[300px]"
            style={{ boxShadow: "-5px 5px 15px black" }}
            alt="Seeds"
          />
        </div>
      </div>
      <div className="overflow-hidden h-[20%] w-full md:w-[40%] md:h-full absolute md:top-0 left-0 bottom-0 bg-black bg-opacity-40">
        <img
          src="/img/crops.png"
          className="opacity-60 w-full h-full object-cover"></img>
      </div>
    </div>
  );
}
