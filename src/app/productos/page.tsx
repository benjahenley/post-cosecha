import Productos from "@/presentation/components/pages/home/Productos";
import InteresGeneral from "@/presentation/components/pages/productos/Interes";
import Navbar from "@/presentation/components/ui/navbar/alternate";

interface CardProps {
  className?: string;
}

export default function ProductosPage({ className }: CardProps) {
  return (
    <div className={`${className} relative overflow-hidden`}>
      <Navbar />
      <Productos className="w-full bg-white pb-10 md:pb-0" />
      <InteresGeneral />
    </div>
  );
}
