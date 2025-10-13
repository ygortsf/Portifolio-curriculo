import Link from "next/link";
import header from "./header.module.css";

export function Header() {
    return (
        <header className={header.full} style={{ marginBottom: "15px" }}>
            <div className={header.container}>

                <div className={header.titulo}>
                    <img
                        src="/ygor.png"
                        width={150}
                        height={150}
                        style={{ borderRadius: "50%" }}
                    />
                    <div className={header.nome}>
                        <h1>Ygor de Tárcio</h1>
                        <p className={header.p}>Desenvolvedor Fullstack</p>
                    </div>

                </div>

                <nav className={header.nav}>
                    <ul className={header.ul}>
                        <li className={header.li}><Link href="Sobre">Sobre</Link></li>
                        <li className={header.li}><Link href="ExperienciaA">Experiência Academica</Link></li>
                        <li className={header.li}><Link href="ExperienciaP">Experiência Profissional</Link></li>
                    </ul>
                </nav>

            </div>
            <br />
            <div className={header.listra}></div>
        </header>
    );
}