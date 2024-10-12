"use client";

import { useEffect, useState } from "react";
import ProductCardSingle from "@/presentation/components/ui/product-card/single";
import { ColoredButton } from "@/presentation/components/ui/buttons/page";
import LightBoxImage from "../../ui/lightbox-image/page";
import { Product } from "@/infrastructure/interfaces/products";

type Props = {
  product: Product;
};

export default function ProductComp({ product }: Props) {
  const [activeMenu, setActiveMenu] = useState<string | undefined>(undefined);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const handleOpenLightbox = (menu: string) => {
    setActiveMenu(menu);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    setActiveMenu(undefined); // Clear the active menu when closing
  };

  return (
    <section className="mt-[7rem] mb-[3rem] md:mt-[7rem] flex flex-col items-center justify-center p-2 lg:p-5 w-full max-w-xl lg:max-w-3xl xl:max-w-screen-lg m-auto">
      <div className="w-full flex flex-col justify-center items-center">
        <ProductCardSingle {...product} />

        <div className="w-full flex flex-col lg:flex-row gap-2 justify-between items-center mt-10 px-5">
          <ColoredButton bg={product.bg}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={product.security}>
              Hoja De Seguridad
            </a>
          </ColoredButton>

          <ColoredButton
            bg={product.bg}
            onClick={() => handleOpenLightbox(product.certificate)}>
            Certificado
          </ColoredButton>

          <ColoredButton
            bg={product.bg}
            onClick={() => handleOpenLightbox(product.tag)}>
            Etiqueta
          </ColoredButton>
        </div>

        {isLightboxOpen && activeMenu && (
          <LightBoxImage src={activeMenu} onClose={handleCloseLightbox} />
        )}
      </div>
    </section>
  );
}
