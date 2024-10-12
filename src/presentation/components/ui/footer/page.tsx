import React from "react";

export default function Footer() {
  return (
    <footer
      className={`bg-black text-white py-4 w-full transition-all duration-300 `}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="py-5 flex flex-col-reverse lg:flex-row justify-between items-start lg:items-start">
          <div className="flex flex-col w-full gap-5 mt-10 md:mt-0">
            <h2 className="text-2xl font-bold font-sans">Post Cosecha</h2>
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=541152912222&text=Buenas%2C%20un%20saludo.%20Mi%20nombre%20es%20%20______%20y%20me%20comunico%20para%20hacer%20una%20consulta."
              className="text-md  hover:underline underline-offset-4  font-light">
              (+54) 9 11 5291-2222
            </a>

            <a
              href="mailto:info@postcosechasrl.com.ar"
              target="_blank"
              className="text-md cursor-pointer hover:underline underline-offset-2 font-light">
              info@postcosechasrl.com.ar
            </a>
            <p className="text-md font-medium font-sans">
              © {new Date().getFullYear()} Post Cosecha SRL
            </p>
          </div>
          <div className="flex flex-col w-full items-start md:items-end gap-5 md:mt-0 text-center">
            <a
              href="/contacto"
              className="hover:text-gray-400 font-light font-sans">
              Contacto
            </a>
            <a
              href="/productos"
              className="hover:text-gray-400 font-light font-sans">
              Productos
            </a>
            <a
              href="/empresa"
              className="hover:text-gray-400 font-light font-sans">
              Empresa
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
