import sobre from "./sobre.module.css";

export function Sobre() {
    return (
        <div className={sobre.contain} >
            <div className={sobre.card}>
                <h1>Sobre</h1>
                <p>Me chamo Ygor de Tárcio da Silva Ferreira, sou um desenvolvedor de
                    20 anos, ainda em formação, estou realizando graduação em
                    Sistemas Para Internet Na Universidade Cátolica de Pernambuco</p>
            </div>
        </div>
    );
}