import { Header } from "../../components/Header";
import { NewsContext } from "../../providers/NewsContext/NewsContext";
import { useContext } from "react";
import { News } from "../../components/News/news";
import { Footer } from "../../components/Footer";
import likeimg from "../../assets/likeImg.svg";
export const InternPage = () => {
  const { newslist, currentNews } = useContext(NewsContext);
  console.log(currentNews?.likes);
  return (
    <div className="min-h-[100vh]">
      <Header />
      <div className=" flex flex-col items-center gap-[20px] py-[16px] px-[20px]">
        <p className="text-black text-base font-inter font-normal">
          {" "}
          Por : {currentNews?.owner}
        </p>
        <h1 className="text-black text-3xl font-lora font-bold w-full max-w-[523px]">
          {currentNews?.title}
        </h1>
        <img className="mim-h-[200px] max-h-[350px] rounded-xl w-full max-w-[580px]" src={currentNews?.image} alt="" />
        <div className="  w-full max-w-[570px] flex justify-start">
          {currentNews?.likes.length === 0 ? (
            <div className="flex gap-[10px]">
              <img src={likeimg} alt="" />
              <p className="text-black text-sm font-inter font-normal">
                Seja o primeiro a curtir{" "}
              </p>
            </div>
          ) : (
            <div className="flex gap-[10px]">
              <img src={likeimg} alt="" />
              <p className="text-black text-sm font-inter font-normal">
                {currentNews?.likes.length} Curtidas
              </p>
            </div>
          )}
        </div>

        <p className="w-full max-w-[560px] text-black text-base font-inter font-normal leading-9">
          {currentNews?.description}
        </p>
      </div>

      <div className="py-[16px] px-[20px]">
        <h1 className="text-black text-4xl font-lora font-bold mb-[30px]">
          Leia também
        </h1>

        <ul className="flex flex-wrap gap-[10px]">
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
