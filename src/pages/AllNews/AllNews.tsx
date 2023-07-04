import { useContext } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { News } from "../../components/News/news";
import { NewsContext } from "../../providers/NewsContext/NewsContext.tsx"; 

import image from "../../assets/Rectangle7.jpg";

export const AllNews = () => {
  const { newslist } = useContext(NewsContext);

  return (
    <div>
      <Header />
      <div className="py-[16px] px-[20px]">
        <h2 className="text-black text-xl font-bold font-lora mb-[15px]">Todas as noticias</h2>
        <ul className=" flex gap-[14px] flex-wrap">
          {newslist.map((news) => {
          return (
            <News
            image={image}
            title={news.title}
            owner={news.owner}
            key={news.id}
            />
          );
          })}
        </ul>
      </div>
      <Footer />
    </div>
  );
};
