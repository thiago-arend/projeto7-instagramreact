import ReactDOM from "react-dom";
import Post from "./components/Post";
import Posts from "./components/Posts";
import Stories from "./components/Stories";
import Suggestions from "./components/Suggestions";

function App(props) {
    return (
        <div>
            <div class="navbar">
                <div class="container">
                    <div class="logo">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <div class="separador"></div>
                        <img src="assets/img/logo.png" alt="logo" />
                    </div>

                    <div class="pesquisa">
                        <input type="text" placeholder="Pesquisar" />
                    </div>

                    <div class="icones">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>

                    <div class="icones-mobile">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                </div>
            </div>

            <div class="corpo">
                <div class="esquerda">
                    <Stories />
                    <Posts />
                </div>

                <div class="sidebar">
                    <div class="usuario">
                        <img src="assets/img/catanacomics.svg" alt="imagem de perfil" />
                        <div class="texto">
                            <span>
                                <strong>catanacomics</strong>
                                <ion-icon name="pencil"></ion-icon>
                            </span>
                        </div>
                    </div>

                    <Suggestions />

                    <div class="links">
                        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                        Hashtags • Idioma
                    </div>

                    <div class="copyright">
                        © 2021 INSTAGRAM DO FACEBOOK
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(App(), document.querySelector(".root"));