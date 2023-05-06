import { useState } from "react"

export default function () {
    const [nome, setNome] = useState("catanacomics");
    const [imagem, setImagem] = useState("assets/img/catanacomics.svg");

    function atualizarNome() {
        const novoNome = prompt("Digite seu nome:");
        if (novoNome.length > 0) setNome(novoNome);
    }

    function atualizarImagem() {
        const novaImagem = prompt("Digite a url da imagem escolhida:");
        if (novaImagem.length > 0) setImagem(novaImagem);
    }

    return (
        <div class="usuario">
            <img data-test="profile-image" onClick={atualizarImagem} src={imagem} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong data-test="name">{nome}</strong>
                    <ion-icon data-test="edit-name" onClick={atualizarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}