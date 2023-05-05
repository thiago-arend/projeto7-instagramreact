import Suggestion from "./Suggestion";

export default function Suggestions() {
    const sgts = [{ imagem: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", status: "Segue você" },
    { imagem: "assets/img/chibirdart.svg", nome: "chibirdart", status: "Segue você" },
    { imagem: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", status: "Novo no Instagram" },
    { imagem: "assets/img/adorable_animals.svg", nome: "adorable_animals", status: "Segue você" },
    { imagem: "assets/img/smallcutecats.svg", nome: "smallcutecats", status: "Segue você" }]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sgts.map((s) => <Suggestion imagem={s.imagem} nome={s.nome} status={s.status} />)}

        </div>
    );
}