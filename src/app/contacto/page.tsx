import ContactoComponent from "@/presentation/components/pages/contacto/page";
import EmpresaComponent from "@/presentation/components/pages/empresa/page";
import Navbar from "@/presentation/components/ui/navbar/alternate";
import "/src/styles/embla.css";
import "/src/styles/global.css";

export default function EmpresaPage() {
  return (
    <div>
      <Navbar />
      <ContactoComponent />
    </div>
  );
}
