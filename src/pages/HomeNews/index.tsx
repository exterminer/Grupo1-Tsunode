import { LastNews } from "./LastNews";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import notebook from "../../assets/notebook.png";
import { Link } from "react-router-dom";

export const HomeNews = () => {
    return (
        <>
            <section>
                <Header />
            </section>
            <section className="p-5">
                <div className="flex flex-col items-center gap-2">
                    <p className="font-inter font-semibold text-xs lg:text-lg">KENZIE FEED</p>
                    <h1 className="text-black text-xl font-bold font-lora text-3xl mb-[15px]">Seja muito bem vindo ao KenzieFeed</h1>
                    <p className="font-inter text-xs mb-6">Fique por dentro das últimas notícias</p> 
                    <img src={notebook} alt="Imagem de xícara de café junto a notebook e caderno de anotações em uma mesa" />
                </div>
            </section>
            <section className="p-5">
                <div className="flex flex-row justify-between my-6">
                    <h2 className="text-black text-xl font-bold font-lora mb-[15px]">Últimas notícias</h2>
                    <Link to="/allnews">
                    <button className="text-white text-xs text-base font-inter font-bold rounded-md bg-blue w-[77px] h-[34px]">Ver tudo</button>
                    </Link>
                </div>
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