import {
  ParagraphSectionText,
  SectionSubTitle,
  SectionTitle,
  Subtitle,
  Title,
} from "../../ui/texts/page";

interface CardProps {
  className?: string;
}

export default function Antiguedad({ className }: CardProps) {
  return (
    <div className={className}>
      <div className="py-5 w-full overflow-hidden whitespace-nowrap relative">
        <div className="flex whitespace-nowrap animate-marqueeSmall md:animate-marquee">
          <Subtitle color="white" className="mr-8">
            ¡30 AÑOS OFRECIENDO LA MEJOR CALIDAD Y ATENCIÓN!
          </Subtitle>
          <Subtitle color="white" className="mr-8">
            ¡30 AÑOS OFRECIENDO LA MEJOR CALIDAD Y ATENCIÓN!
          </Subtitle>
          <Subtitle color="white" className="mr-8">
            ¡30 AÑOS OFRECIENDO LA MEJOR CALIDAD Y ATENCIÓN!
          </Subtitle>
        </div>
      </div>
    </div>
  );
}
