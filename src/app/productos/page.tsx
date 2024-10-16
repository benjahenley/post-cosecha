import InteresGeneral from "@/presentation/components/pages/productos/Interes";
import Productos from "@/presentation/components/pages/productos/Productos";
import Navbar from "@/presentation/components/ui/navbar/alternate";

export default function ProductosPage() {
  return (
    <div className={`relative overflow-hidden`}>
      <Navbar />
      <Productos className="w-full bg-white pb-10 md:pb-0" />
      <InteresGeneral />
    </div>
  );
}
