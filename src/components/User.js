import { useState } from "react"

export default function (props) {
    const [nome, setNome] = useState("catanacomics");

    function atualizarNome() {
        const novoNome = prompt("Digite seu nome:");
        if (novoNome.length > 0) setNome(novoNome);
    }

    return (
        <div class="usuario">
            <img src={props.srcImagem} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong>{nome}</strong>
                    <ion-icon onClick={atualizarNome} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}