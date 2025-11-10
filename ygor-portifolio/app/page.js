"use client";

import { ExperienciaA } from "@/componentes/ExperienciaA";
import { ExperienciaP } from "@/componentes/ExperienciaP";
import { Header } from "@/componentes/header";
import { Projetos } from "@/componentes/Projetos";
import { Sobre } from "@/componentes/sobre";


export default function Home() {
 
  return (
    <div>
      <Header />
      <Sobre data-aos="fade-up" />
      <div className="l"></div>
      <ExperienciaA data-aos="fade-up" />
      <div className="l"></div>
      <ExperienciaP data-aos="fade-up" />
      <div className="l"></div>
      <Projetos/>
    </div>
  );
}
