import HomeLanding from "./Landing";
import MissionStatement from "./Mission";
import Message from "./Message";
import Nosotros from "./Nosotros";
import Productos from "./Productos";
import Antiguedad from "./Antiguedad";
import Contacto from "./Contacto";

interface CardProps {
  className?: string;
}

export default function HomeComp({ className }: CardProps) {
  return (
    <div className={`${className} relative overflow-hidden`}>
      <HomeLanding className="flex items-center min-h-screen" />

      <Message></Message>
      <Antiguedad className="bg-gradient-to-t from-[#f2e2a5] via-[#f4d995] to-[#f6d58e]"></Antiguedad>
      <MissionStatement></MissionStatement>

      <Nosotros className="bg-gradient-to-b from-[#E4F1D0] via-[#EAE7E0] to-[#FBFAF4]" />
      <Productos className="w-full bg-white"></Productos>
      <Contacto className="relative"></Contacto>
    </div>
  );
}
