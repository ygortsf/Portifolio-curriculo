import { ExperienciaP } from "@/componentes/ExperienciaP";
import { Header } from "@/componentes/header";
import { Sobre } from "@/componentes/sobre";

export default function Home(){
  return(
    <div>
      <Header/>
      <Sobre/>
      <ExperienciaP/>
    </div>
  );
}