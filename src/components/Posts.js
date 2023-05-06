import Post from "./Post";

export default function Posts() {
    const posts = [{
        topoImagem: "./assets/img/meowed.svg", topoTitulo: "meowed",
        conteudoImagem: "./assets/img/gato-telefone.svg", conteudoAltImagem: "gato-telefone",
        curtidasImagem: "./assets/img/respondeai.svg", curtidasNome: "respondeai"
    },

    {
        topoImagem: "./assets/img/barked.svg", topoTitulo: "barked",
        conteudoImagem: "./assets/img/dog.svg", conteudoAltImagem: "dog",
        curtidasImagem: "./assets/img/adorable_animals.svg", curtidasNome: "adorable_animals"
    },

    {
        topoImagem: "./assets/img/9gag.svg", topoTitulo: "9gag",
        conteudoImagem: "./assets/img/cat3.jpeg", conteudoAltImagem: "ia-cat",
        curtidasImagem: "./assets/img/filomoderna.svg", curtidasNome: "filomoderna"
    }, 

    {
        topoImagem: "./assets/img/nathanwpylestrangeplanet.svg", topoTitulo: "nathanwpylestrangeplanet",
        conteudoImagem: "./assets/img/cat4.jpeg", conteudoAltImagem: "ia-steampunk-cat",
        curtidasImagem: "./assets/img/meowed.svg", curtidasNome: "meowed"
    }];

    return (
        <div class="posts">
            {posts.map((p) => <Post topoImagem={p.topoImagem} topoTitulo={p.topoTitulo} 
                conteudoImagem={p.conteudoImagem} conteudoAltImagem={p.conteudoAltImagem} 
                curtidasImagem={p.curtidasImagem} curtidasNome={p.curtidasNome} />)}
        </div>
    );
}