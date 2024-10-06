import { useRouter } from "next/router";
import {
  ParagraphSectionText,
  SectionSubTitle,
  SectionTitle,
  SectionTitleColoured,
} from "../../ui/texts/page";

export default function EmpresaComponent() {
  return (
    <div>
      <section className="mt-[5.5rem] mb-[3rem] md:mt-[7rem] flex flex-col items-center justify-center p-2 lg:p-5  max-w-xl lg:max-w-3xl xl:max-w-screen-lg m-auto">
        <SectionSubTitle className="mb-0 md:mb-5">Empresa</SectionSubTitle>
        <SectionTitle className="mb-10 xl:mb-20">Sobre Nosotros</SectionTitle>
        <div className="group px-2 lg:px-5 mb-5">
          <ParagraphSectionText className="mb-5">
            Post Cosecha S.R.L. es una empresa dedicada a la producción,
            importación y comercialización de productos específicos para el
            control de plagas de los granos almacenados.
          </ParagraphSectionText>
          <ParagraphSectionText className="mb-5">
            La investigación de nuevos productos, sumados a nuestra línea
            tradicional, son nuestra respuesta a las necesidades que impone un
            mercado en{" "}
            <b className="bg-blend-hard-light">creciente expansión</b>, al cual
            venimos proveyendo desde hace 25 años con un alto compromiso de
            calidad y distribución.
          </ParagraphSectionText>
          <ParagraphSectionText className="mb-5">
            Con representantes en todo el país, Post Cosecha S.R.L. garantiza
            una red de distribución inmediata para asegurarle un mejor servicio
            al cliente.
          </ParagraphSectionText>
        </div>
        <div className="w-full items-center">
          <SectionTitleColoured className="my-6 w-full text-center">
            Nuestra Misión
          </SectionTitleColoured>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start gap-5">
          <div className="relative lg:w-1/2">
            <ParagraphSectionText className="mt-5 px-2 md:px-5 relative z-10">
              Apuntamos a ser una organización
              <span className="font-bold  "> líder</span> en el mercado, tanto
              por su calidad como por su confiabilidad. Es por ello que
              brindamos soluciones{" "}
              <span className="font-semibold  ">sustentables y eficientes</span>{" "}
              para afrontar las crecientes necesidades del mercado agronómico,
              otorgando a través de nuestros productos, la{" "}
              <span className="font-semibold  ">protección</span> que las
              cosechas necesitan,{" "}
              <span className="">cuidando el medio ambiente</span> y acompañando
              el crecimiento de nuestros clientes.
            </ParagraphSectionText>
            <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-white to-green-100 opacity-10 rounded-lg pointer-events-none z-0"></div>
          </div>

          <div className="mt-10 lg:w-1/2">
            <video
              controls
              src="/video/seeds.mp4"
              className="rounded-lg shadow-lg w-full"></video>
          </div>
        </div>
      </section>
    </div>
  );
}
