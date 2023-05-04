import Suggestion from "./Suggestion";

export default function Suggestions() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            <Suggestion srcImagem="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes"
                status="Segue você" />
            <Suggestion srcImagem="assets/img/chibirdart.svg" nome="chibirdart"
                status="Segue você" />
            <Suggestion srcImagem="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar"
                status="Novo no Instagram" />
            <Suggestion srcImagem="assets/img/adorable_animals.svg" nome="adorable_animals"
                status="Segue você" />
            <Suggestion srcImagem="assets/img/smallcutecats.svg" nome="smallcutecats"
                status="Segue você" />

        </div>
    );
}