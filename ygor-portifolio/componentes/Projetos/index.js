import styles from "./projetos.module.css";

export function Projetos() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projetos</h1>
      <ul className={styles.lista}>
        <li className={styles.item}>
          <p><strong>Nome do Projeto:</strong> Jogo da Forca Com React Next Js</p>
          <p><strong>Descrição:</strong> Site feito para Disciplina de Front-End</p>
          <p><strong>Tecnologias:</strong> React, Module Css </p>
          <p><strong>Link:</strong> <a href="https://github.com/ygortsf/JogoDaForca">github.com/ygortsf/JogoDaForca</a></p>
        </li>

        <li className={styles.item}>
          <p><strong>Nome do Projeto:</strong> Formulário com Api para Whatsapp</p>
          <p><strong>Descrição:</strong> Formulário que chama a API do Whatsapp e envia uma mensagem já pré-definida.</p>
          <p><strong>Tecnologias:</strong> HTML, CSS, JavaScript</p>
          <p><strong>Link:</strong> <a href="https://github.com/ygortsf/testform">github.com/ygortsf/Form</a></p>
        </li>

        
      </ul>
    </div>
  );
}
