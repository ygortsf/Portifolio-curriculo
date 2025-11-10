import styles from "./ExperienciaP.module.css";

export function ExperienciaP() {
    return (
        <div id="experienciaP" className={styles.container}>
            <h1 className={styles.title}>Experiência Profissional</h1>
            <ul className={styles.lista}>
                <li className={styles.item}>
                    <p><strong>Cargo:</strong> Soldado - Companhia de Suprimento Log</p>
                    <p><strong>Instituição:</strong> 14º Batalhão Logístico</p>
                    <p><strong>Período:</strong> 2024 - 2025</p>
                    <p><strong>Atividades desenvolvidas:</strong> Desenvolvimento de equipe, trabalho sob pressão, controle de estoque e inventário, comunicação eficaz e disciplina militar.</p>
                </li>

                <li className={styles.item}>
                    <p><strong>Cargo:</strong> Auxiliar Administrativo</p>
                    <p><strong>Instituição:</strong> Escola Municipal Professor Enaldo Manoel Bandeira</p>
                    <p><strong>Período:</strong> 2022 - 2023</p>
                    <p><strong>Atividades desenvolvidas:</strong> Gestão de documentos e arquivos, emissão de históricos escolares, recepção e atendimento ao público, controle de frequência escolar.</p>
                </li>
            </ul>
        </div>
    );
}
