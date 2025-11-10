import styles from "./ExperienciaA.module.css";

export function ExperienciaA() {
    return (
        <div id="experienciaA" className={styles.container}>
            <h1 className={styles.title}>Experiência Acadêmica</h1>
            <ul className={styles.lista}>
                <li className={styles.item}>
                    <p><strong>Curso:</strong> Sistemas Para Internet</p>
                    <p><strong>Instituição:</strong> Universidade Católica de Pernambuco</p>
                    <p><strong>Período:</strong> 2024 - Atual</p>
                    <p><strong>Formação prevista:</strong> 2026</p>
                </li>

                <li className={styles.item}>
                    <p><strong>Curso:</strong> Lógica de Programação</p>
                    <p><strong>Instituição:</strong> SENAC</p>
                    <p><strong>Período:</strong> 20/06/2025 - 20/07/2025</p>
                </li>

                <li className={styles.item}>
                    <p><strong>Curso:</strong> Informática Básica</p>
                    <p><strong>Instituição:</strong> SENAC</p>
                    <p><strong>Período:</strong> 21/07/2025 - 15/08/2025</p>
                </li>

                <li className={styles.item}>
                    <p><strong>Curso:</strong> Educação Financeira</p>
                    <p><strong>Instituição:</strong> SENAC</p>
                    <p><strong>Período:</strong> 15/08/2025 - 20/09/2025</p>
                </li>
            </ul>
        </div>
    );
}
