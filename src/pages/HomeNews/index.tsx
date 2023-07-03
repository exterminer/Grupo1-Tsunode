import notebook from "../../assets/notebook.png"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { LastNews } from "./LastNews"

export const HomeNews = () => {

    return (
        <>
        <section>
            <Header />
        </section>
        <section>
        <div>
           <p>KENZIE FEED</p>
           <h1>Seja muito bem vindo ao KenzieFeed</h1>
           <p>Fique por dentro das últimas notícias</p> 
<           img src={notebook} alt="Imagem de xícara de café junto a notebook e caderno de anotações em uma mesa" />
        </div>
        </section>
        <section>
            <h2>Últimas notícias</h2>
            <ul>
                <LastNews />
            </ul>
        </section>
        <section>
            <Footer />
        </section>
        </>
    )

}