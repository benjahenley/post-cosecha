import NavbarAlternate from "@/presentation/components/ui/navbar/alternate";
import ProductComp from "@/presentation/components/pages/productos/productPage";
import { PRODUCTS } from "@/infrastructure/lists/products";

// Dynamic page component
export default function ProductPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS.find((product) => product.id === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <NavbarAlternate />
      <ProductComp product={product} />
    </div>
  );
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}
