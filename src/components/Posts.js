import Post from "./Post";

export default function Posts() {
    const posts = [{
        topoImagem: "./assets/img/meowed.svg", topoTitulo: "meowed",
        conteudoImagem: "./assets/img/gato-telefone.svg", conteudoAltImagem: "gato-telefone",
        curtidasImagem: "./assets/img/respondeai.svg", curtidasNome: "respondeai", curtidasNumero: "101.523"
    },

    {
        topoImagem: "./assets/img/barked.svg", topoTitulo: "barked",
        conteudoImagem: "./assets/img/dog.svg", conteudoAltImagem: "dog",
        curtidasImagem: "./assets/img/adorable_animals.svg", curtidasNome: "adorable_animals", curtidasNumero: "99.159"
    },

    {
        topoImagem: "./assets/img/9gag.svg", topoTitulo: "9gag",
        conteudoImagem: "./assets/img/womanyellingcat.jpg", conteudoAltImagem: "womanyellingcat",
        curtidasImagem: "./assets/img/filomoderna.svg", curtidasNome: "filomoderna", curtidasNumero: "356"
    }];

    return (
        <div class="posts">
            {posts.map((p) => <Post topoImagem={p.topoImagem} topoTitulo={p.topoTitulo} 
                conteudoImagem={p.conteudoImagem} conteudoAltImagem={p.conteudoAltImagem} 
                curtidasImagem={p.curtidasImagem} curtidasNome={p.curtidasNome} 
                curtidasNumero={p.curtidasNumero} />)}
        </div>
    );
}