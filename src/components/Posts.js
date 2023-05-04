import Post from "./Post";

export default function Posts() {
    return (
        <div class="posts">
            <Post topoImagem="./assets/img/meowed.svg" topoTitulo="meowed" 
                conteudoImagem="./assets/img/gato-telefone.svg" conteudoAltImagem="gato-telefone"
                curtidasNome="respondeai" curtidasNumero="101.523"/>
            <Post topoImagem="./assets/img/barked.svg" topoTitulo="barked" 
                conteudoImagem="./assets/img/dog.svg" conteudoAltImagem="dog"
                curtidasNome="adorable_animals" curtidasNumero="99.159"/>
            <Post topoImagem="./assets/img/9gag.svg" topoTitulo="9gag" 
                conteudoImagem="./assets/img/womanyellingcat.jpg" conteudoAltImagem="womanyellingcat"
                curtidasNome="respondeai" curtidasNumero="356"/>
        </div>
    );
}