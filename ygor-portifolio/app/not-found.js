
/* Página personalizada para página não encontrada */

export default function NotFound(){
    return(
        <div className="hahai">
            <h1>Pagina 404 Nao encontrada</h1>
            <p>Esta página que você tentou acessar não existe {String.fromCodePoint(0x1F61E)}</p>
        </div>
    );
}