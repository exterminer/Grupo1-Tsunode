import { useContext } from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { News } from "../../components/News/news";
import { NewsContext } from "../../providers/NewsContext/NewsContext.tsx";


export const AllNews = () => {
  const { newslist } = useContext(NewsContext);



  return (
    <div className="min-h-[100vh]">
      <Header/>
      <div className="py-[16px] px-[20px]">
        <h2 className="text-black text-xl font-bold font-lora mb-[15px]">
          Todas as noticias
        </h2>
        <ul className=" flex gap-[14px] flex-wrap">
          {newslist.map((news) => {
            return (
              <News
                image={news.image}
                title={news.title}
                owner={news.owner}
                key={news.id}
                id={news.id}
              />
            );
          })}
        </ul>
      </div>
      <div className="mt-[20px] h-[100px]"></div>
      <Footer />
    </div>
  );
};
