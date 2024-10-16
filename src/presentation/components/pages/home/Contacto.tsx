import { RedButton, RedButtonComplement } from "../../ui/buttons/page";
import ContactForm from "../../ui/form/page";
import InfoSection from "../../ui/infoSection/page";
import {
  ParagraphSectionText,
  SectionSubTitle,
  SectionTitle,
} from "../../ui/texts/page";

interface CardProps {
  className?: string;
}
export default function Contacto({ className }: CardProps) {
  const isProd = process.env.NODE_ENV === "production" ? "" : "/";

  return (
    <>
      <div className={`${className} w-full flex justify-center pt-10 lg:pb-10`}>
        <div className="px-3 relative z-30 w-full bg-white max-w-md md:max-w-lg lg:max-w-2xl p-2 rounded-3xl shadow-md pt-10 md:pt-12">
          <InfoSection subtitle="escribinos!" title="estamos para ayudarte" />
          <ContactForm />
        </div>
        <img
          src={isProd + "img/crops.png"}
          className="absolute left-0 right-0 top-0 bottom-0 w-full h-full z-99 object-cover"
        />

        <div className="absolute top-[15px] transform -translate-x-1/2 z-20 bg-gray-100 lg:top-0 w-auto h-full rounded-t-3xl" />

        <div className="absolute top-[-5px] transform -translate-x-1/2 z-10 bg-gray-200 lg:top-0 w-auto h-full rounded-t-3xl" />

        <div className="absolute top-[-25px] transform -translate-x-1/2 z-0 bg-gray-300 lg:top-0 w-auto  h-full rounded-t-3xl" />
      </div>
    </>
  );
}
