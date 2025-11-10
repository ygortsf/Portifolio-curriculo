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
                        alt="Foto de perfil"
                    />
                    <div className={header.nome}>
                        <h1>Ygor de Tárcio</h1>
                        <p className={header.p}>Desenvolvedor Fullstack</p>
                    </div>
                    <div className={header.cent}>
                        <a
                            href="https://wa.me/5581987280657?text=Olá%20Ygor!%20Vim%20do%20seu%20portfólio%20e%20gostaria%20de%20conversar."
                            target="_blank"
                            rel="noopener noreferrer"
                            className={header.con}
                        >
                            <span className={header.whatsappWrapper}>

                                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#25D366" viewBox="0 0 24 24">
                                    <path d="M20.52 3.48A11.81 11.81 0 0 0 12 0C5.37 0 .02 5.35.02 12c0 2.11.55 4.18 1.59 5.99L0 24l6.18-1.57A11.94 11.94 0 0 0 12 24c6.63 0 12-5.37 12-12a11.81 11.81 0 0 0-3.48-8.52zm-8.52 19.5c-2.04 0-3.98-.54-5.66-1.56l-.4-.25-3.68.94.98-3.58-.26-.41A9.936 9.936 0 0 1 2.02 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.46-7.31c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15s-.78.98-.95 1.18c-.17.2-.34.22-.63.07-.3-.15-1.27-.47-2.42-1.48-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.28.3-.47.1-.2.05-.37-.02-.52-.07-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51-.17-.01-.37-.01-.57-.01s-.52.07-.79.37c-.27.3-1.04 1.02-1.04 2.48s1.06 2.87 1.2 3.07c.15.2 2.06 3.15 5 4.42.7.3 1.25.48 1.68.61.71.21 1.36.18 1.87.11.57-.08 1.78-.72 2.03-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z" />
                                </svg>
                                    CONTATO</span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>

            <br />
            <div className={header.listra}></div>
        </header>
    );
}
