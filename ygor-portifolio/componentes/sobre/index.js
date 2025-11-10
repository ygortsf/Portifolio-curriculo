import sobre from "./sobre.module.css";

export function Sobre() {
    return (
        <div id="sobre" className={sobre.contain}>
            <div className={sobre.card}>
                <h1 className={sobre.h1}>Sobre</h1>
                <p className={sobre.txt}>
                    Olá me chamo Ygor de Tárcio da Silva Ferreira, sou um desenvolvedor de
                    Software. Ainda em formação, estou realizando graduação em
                    Sistemas Para Internet Na Universidade Católica de Pernambuco. Tenho experiência em linguagens de programação, tais como: Python, Java, JavaScript, MySQL. Gosto sempre de aprender constantemente novas tecnologias. Durante minha trajetória desenvolvi projetos que envolvem comunicação entre cliente-servidor, API's REST, simulação de jogo de dados com Python. <br/>
                    Meu objetivo é evoluir como desenvolvedor, aplicando boas práticas de código, princípios de arquitetura limpa e metodologias ágeis como Scrum, e poder também colaborar de forma efetiva na função que me for atribuída.
                </p>

                <h1 className={sobre.h1}>Tecnologias usadas para criação deste site</h1>
                <ul className={sobre.techList}>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>CSS Modules</li>
                    <li>AOS (Animação de scroll)</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </div>
        </div>
    );
}
