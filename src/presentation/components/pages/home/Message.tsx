import { EmblaOptionsType } from "embla-carousel";

import {
  SectionTitle,
  Subtitle,
  Text,
  Title,
  SectionSubTitle,
  ParagraphSectionText,
} from "../../ui/texts/page";

interface CardProps {
  className?: string;
}

const OPTIONS: EmblaOptionsType = {};

export default function Message({ className }: CardProps) {
  return (
    <div className="w-full bg-white">
      <div
        className={
          className +
          " py-10 md:py-20 flex flex-col items-center w-full m-auto max-w-md md:max-w-lg lg:max-w-2xl px-2"
        }>
        <SectionSubTitle className="mb-5">YA COSECHÓ?</SectionSubTitle>
        <SectionTitle className="mb-5 md:mb-10 text-center">
          CONFÍE, LO DEMÁS ESTÁ EN NUESTRAS MANOS
        </SectionTitle>
        <ParagraphSectionText className="text-center text-pretty">
          La integridad, la transparencia y una sólida ética de trabajo son la
          base de nuestros valores. Nos enorgullece contribuir a la comunidad y
          al medio ambiente. Nuestro objetivo es dejar la tierra en mejores
          condiciones hoy para construir un futuro más prometedor para las
          generaciones venideras.
        </ParagraphSectionText>
      </div>
    </div>
  );
}
