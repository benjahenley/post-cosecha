import {
  ParagraphSectionText,
  SectionSubTitle,
  SectionTitle,
} from "../../ui/texts/page";

interface CardProps {
  className?: string;
}

export default function InteresGeneral({ className }: CardProps) {
  return (
    <div className="relative m-auto py-20 w-full bg-lightGray grid items-center justify-center h-full">
      <div className="max-w-screen-lg">
        <div className="text-center">
          <SectionSubTitle className="mb-5">Interés General</SectionSubTitle>
          <SectionTitle className="mb-10 md:mb-16 xl:mb-20">
            información importante
          </SectionTitle>
        </div>
        <div className="px-2 md:px-5">
          <ParagraphSectionText className="mb-5 text-pretty">
            Evitar la inhalación y el contacto con la piel durante el manipuleo.
            Usar antiparras, máscara con filtro para fosforados, guantes y botas
            de goma y ropa protectora adecuada durante la preparación y
            aplicación.
          </ParagraphSectionText>
          <ParagraphSectionText className="mb-5 text-pretty">
            No comer, beber o fumar al aplicar. Los locales a tratar deben ser
            evacuados previamente y bien ventilados antes de volver a transitar.
            Mantener el producto alejado del alcance de los niños y personas
            inexpertas. No transportar ni almacenar con alimentos. Destruya los
            envases vacíos.
          </ParagraphSectionText>
          <ParagraphSectionText className="mb-5 underline text-pretty">
            En caso de intoxicación, lleve la etiqueta al médico.
          </ParagraphSectionText>
          <ParagraphSectionText className="mb-5 text-pretty">
            En caso de Derrames: Cubra con un material absorbente (aserrín,
            arena, etc.), barra, recoja el barrido y entiérrelo en lugares que
            no contaminen fuentes de agua. Proceda, a continuación a lavar con
            abundante agua el sitio afectado. Debe evitarse la contaminación de
            fuentes de agua.
          </ParagraphSectionText>
          <ParagraphSectionText className="mb-5 text-pretty">
            Almacenamiento: Conservar sus envases originales en lugares secos,
            frescos y lejos del hogar.
          </ParagraphSectionText>
          <ParagraphSectionText className="mb-5">
            Primeros auxilios: En caso de contacto con la piel, lavar las partes
            del cuerpo con abundante agua limpia y jabón. Por contacto en ojos,
            enjuagarse con abundante agua limpia durante 15 minutos.
          </ParagraphSectionText>
          <ParagraphSectionText className="mb-5 underline">
            En todos los casos, llamar inmediatamente al médico.
          </ParagraphSectionText>
          <ParagraphSectionText className="mb-5">
            Consultas en casos de intoxicaciones:
          </ParagraphSectionText>
          <ParagraphSectionText className="mb-5">
            • Centro Nacional de Intoxicaciones, Policlínico Prof. A. Posadas,
            Haedo.
            <br /> Tel: (011) 4654-6648 y 4658-7777
          </ParagraphSectionText>
          <ParagraphSectionText className="mb-5">
            • Hospital de Clínicas de la Facultad de Medicina (UNBA)
            <br /> Tel: (011) 4508-3760/3900/3888 int. 480
          </ParagraphSectionText>
          <ParagraphSectionText className="mb-5">
            • Unidad Toxicológica del Hospital de Niños Dr. Ricardo Gutiérrez de
            Bs. As.
            <br />
            Tel: (011) 4962-6666 y 4962-2247
          </ParagraphSectionText>

          <ParagraphSectionText className="mb-5">
            • Centro Toxic. Sanatorio de Niños de Rosario
            <br /> Tel: (0341) 460677 y 464081
          </ParagraphSectionText>

          <ParagraphSectionText className="mb-5">
            • Hosp. Municipal de Infantes de Córdoba
            <br /> Tel: (0351) 471-8785 y 471-8165
          </ParagraphSectionText>
        </div>
      </div>
    </div>
  );
}
