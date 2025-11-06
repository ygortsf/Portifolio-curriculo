import sobre from "./sobre.module.css";

export function Sobre() {
    return (
        <div className={sobre.contain} >
            <div className={sobre.card}>
                <h1 className={sobre.h1}>Sobre</h1>
                <p className={sobre.txt}>Olá me chamo Ygor de Tárcio da Silva Ferreira, sou um desenvolvedor de
                    Software. Ainda em formação, estou realizando graduação em
                    Sistemas Para Internet Na Universidade Cátolica de Pernambuco. Tenho experiência em linguagens de programação, tais como: Python, Java, JavaScript, MySQL. Gosto sempre de aprender coisas
                    constantemente novas tecnologias. Durante minha Trajetória desenvolvi projetos que envolvem comunicação entre cliente-servidor, API's REST, Simulação de Jogo de dado com Python. <br/>
                    Meu objetivo é evoluir como desenvolvedor, aplicando boas práticas de código, princípios de arquitetura limpa e metodologias ágeis como Scrum, e poder também, colaborar de forma efetiva na função que me for atribuida. 
                    </p>
            </div>
        </div>
    );
}