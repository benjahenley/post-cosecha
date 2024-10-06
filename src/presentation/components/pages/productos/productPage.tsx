"use client";

import ProductCardSingle from "@/presentation/components/ui/product-card/single";
import { Product } from "@/infrastructure/interfaces/products";
import { PRODUCTS } from "@/infrastructure/lists/products";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { BlueButton } from "@/presentation/components/ui/buttons/page";

export default function ProductComp() {
  const [product, setProduct] = useState<Product | undefined>(undefined);

  const searchParams = useParams();
  const id = searchParams?.id;

  useEffect(() => {
    const prodById = PRODUCTS.find((product) => product.id === id);
    setProduct(prodById);
  }, [id]);

  return (
    <section className="mt-[5.5rem] mb-[3rem] md:mt-[7rem] flex flex-col items-center justify-center p-2 lg:p-5  max-w-xl lg:max-w-3xl xl:max-w-screen-lg m-auto">
      {product && (
        <>
          <ProductCardSingle {...product}></ProductCardSingle>
        </>
      )}

      <div className="w-full flex flex-col md:flex-row gap-2 justify-between items-center mt-10">
        <BlueButton bg={product ? product.bg : ""}>
          Hoja De Seguridad
        </BlueButton>
        <BlueButton bg={product ? product.bg : ""}>Certificado</BlueButton>
        <BlueButton bg={product ? product.bg : ""}>Etiqueta</BlueButton>
      </div>
    </section>
  );
}
