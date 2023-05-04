export default function (props) {
    return (
        <div class="usuario">
            <img src={props.srcImagem} alt="imagem de perfil" />
            <div class="texto">
                <span>
                    <strong>{props.nome}</strong>
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}