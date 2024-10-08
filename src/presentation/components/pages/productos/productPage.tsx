"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductCardSingle from "@/presentation/components/ui/product-card/single";
import { ColoredButton } from "@/presentation/components/ui/buttons/page";
import LightBoxImage from "../../ui/lightbox-image/page";
import { PRODUCTS } from "@/infrastructure/lists/products";
import { Product } from "@/infrastructure/interfaces/products";

export default function ProductComp() {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [activeMenu, setActiveMenu] = useState<any | undefined>(undefined);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const searchParams = useParams();
  const id = searchParams?.id;

  useEffect(() => {
    const prodById = PRODUCTS.find((product) => product.id === id);
    setProduct(prodById);
  }, [id]);

  const handleOpenLightbox = (menu: any) => {
    setActiveMenu(menu);
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  return (
    <section className="mt-[7rem] mb-[3rem] md:mt-[7rem] flex flex-col items-center justify-center p-2 lg:p-5 w-full max-w-xl lg:max-w-3xl xl:max-w-screen-lg m-auto">
      <div className="w-full flex flex-col justify-center items-center">
        {product && <ProductCardSingle {...product} />}

        <div className="w-full flex flex-col md:flex-row gap-2 justify-between items-center mt-10">
          <ColoredButton bg={product ? product.bg : ""}>
            <a target="_blank" href={product ? product.security : ""}>
              Hoja De Seguridad
            </a>
          </ColoredButton>
          <ColoredButton
            bg={product ? product.bg : ""}
            onClick={() => handleOpenLightbox(product.certificate)}>
            Certificado
          </ColoredButton>
          <ColoredButton
            bg={product ? product.bg : ""}
            onClick={() => handleOpenLightbox(product.tag)}>
            Etiqueta
          </ColoredButton>
        </div>
        {isLightboxOpen && activeMenu && (
          <LightBoxImage
            onClick={() => {
              setActiveMenu(undefined);
            }}
            src={activeMenu}
            onClose={handleCloseLightbox}
          />
        )}
      </div>
    </section>
  );
}
