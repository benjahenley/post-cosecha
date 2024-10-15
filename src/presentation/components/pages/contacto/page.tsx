import { useRouter } from "next/router";
import {
  ParagraphSectionText,
  SectionSubTitle,
  SectionTitle,
  SectionTitleColoured,
} from "../../ui/texts/page";
import { FaPhone, FaLocationDot, FaMessage } from "react-icons/fa6";
import ContactForm from "../../ui/form/page";

export default function ContactoComponent() {
  return (
    <div>
      <section className="relative overflow-hidden h-full min-h-[100vh] grid items-center">
        <div className="mb-10 bg-white rounded-3xl mt-[7rem] md:mt-[5.5rem] flex flex-col items-center justify-center p-2 pt-10 max-w-xl lg:max-w-3xl xl:max-w-screen-lg m-auto">
          <img
            className="absolute left-0 right-0 top-0 bottom-0 z-[-1] h-full object-cover w-full"
            src="img/seeds2.jpg"
          />
          <SectionSubTitle className="mb-0 md:mb-2">Contacto</SectionSubTitle>
          <SectionTitle className="mb-10">Escribinos!</SectionTitle>
          <div className="flex flex-col items-center lg:flex-row  lg:items-start justify-between gap-10 px-10">
            <a
              className="flex flex-col items-center gap-5"
              target="_blank"
              href="https://api.whatsapp.com/send?phone=541152912222&text=Buenas%2C%20un%20saludo.%20Mi%20nombre%20es%20%20______%20y%20me%20comunico%20para%20hacer%20una%20consulta.">
              <FaPhone className="w-10 h-10 text-primary" />
              (+54 11) 5291-2222/3 <br />
              4701-8335 / 4704-9117
            </a>
            <a
              className="flex flex-col items-center gap-5"
              target="_blank"
              href="https://www.google.com/maps?ll=-34.543206,-58.472495&z=14&t=m&hl=en&gl=US&mapclient=embed&q=Av.+Cabildo+4447+1429+Cdad.+Aut%C3%B3noma+de+Buenos+Aires">
              <FaLocationDot className="w-10 h-10 text-primary" />
              <p>
                Av. Cabildo 4447 8°Piso <br />
                C.P. (C1429ABC) C.A.B.A.
              </p>
            </a>
            <a
              className="flex flex-col items-center gap-5"
              target="_blank"
              href="mailto:info@postcosechasrl.com.ar">
              <FaMessage className="w-10 h-10 text-primary" />
              <p>info@postcosechasrl.com.ar</p>
            </a>
          </div>
          <div className="w-full flex flex-row items-start justify-between gap-20 mt-10">
            <ContactForm></ContactForm>
          </div>
        </div>
      </section>
      <section className="grid items-center w-full py-10 my-10 max-w-screen-lg m-auto">
        <div className="w-full px-2">
          <iframe
            width="100%"
            height="500"
            src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Av.%20Cabildo%204447+(Post%20Cosecha)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
      </section>
    </div>
  );
}
