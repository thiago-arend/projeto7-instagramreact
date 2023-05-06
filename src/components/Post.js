import { useState } from "react";

export default function Post(props) {
    const [bookmark, setBookmark] = useState("bookmark-outline");
    const [heartColor, setHeartColor] = useState("");
    const [heartType, setHeartType] = useState("heart-outline");
    const [qtdLikes, setQtdLikes] = useState(0);
    const [classeAnimacao, setClasseAnimacao] = useState("animacao-esconde");

    // function aplicaEstiloHeart(efeito) {
    //     if (heartType !== "heart") { // se o estilo não for heart, aplica heart
    //         setHeartType("heart");
    //         setHeartColor("vermelho");
    //         setQtdLikes(qtdLikes + 1); // aumenta like

    //         if (efeito)
    //             console.log("aplica efeito!");
    //     }
    // }

    function aplicaEstiloHeart() {
        if (heartType !== "heart") { // se o estilo não for heart, aplica heart
            setHeartType("heart");
            setHeartColor("vermelho");
            setQtdLikes(qtdLikes + 1); // aumenta like
        }
    }

    function removeEstiloHeart() { // se o estilo for heart, remove heart
        if (heartType === "heart") {
            setHeartType("heart-outline");
            setHeartColor("");
            setQtdLikes(qtdLikes - 1); // diminui like
        }
    }

    function aplicaToggleHeart() {
        aplicaEstiloHeart();
        removeEstiloHeart();
    }

    function aplicaAnimacaoHeart() {
        aplicaEstiloHeart();
        setClasseAnimacao("animacao-mostra");
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.topoImagem} alt={props.topoTitulo} />
                    {props.topoTitulo}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <ion-icon class={classeAnimacao} name="heart"></ion-icon>
                <img onClick={aplicaEstiloHeart} src={props.conteudoImagem}
                    onDoubleClick={aplicaAnimacaoHeart} alt={props.conteudoAltImagem} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon onClick={aplicaToggleHeart} class={heartColor} name={heartType}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon onClick={() => (bookmark === "bookmark-outline") ?
                            setBookmark("bookmark") : setBookmark("bookmark-outline")} name={bookmark}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={props.curtidasImagem} alt={props.curtidasNome} />
                    <div class="texto">
                        Curtido por <strong>{props.curtidasNome}</strong> e <strong>outras {qtdLikes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}