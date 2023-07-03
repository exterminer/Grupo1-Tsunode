import { useContext } from "react";
import { NewsContext } from "../../providers/newsContext";
import { News } from "../../components/News/news";
import image from "../../assets/Rectangle7.jpg"

export const AllNews = () => {
  const { newslist } = useContext(NewsContext);

  return (
    <div>
      <h2>Header</h2>

      <h2>Todas as noticias</h2>
      <ul>
        {newslist.map((news) => {
           
          return (
            <News
              img={image}
              title={news.title}
              owner={news.owner}
              key={news.id}
            />
          );
        })}
      </ul>
    </div>
  );
};
