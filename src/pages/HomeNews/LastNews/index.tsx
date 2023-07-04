import { useContext } from "react";
import { NewsContext } from "../../../providers/NewsContext/NewsContext";
import { News } from "../../../components/News/news";

export const LastNews = () => {
  const { newslist } = useContext(NewsContext);

  return (
    <ul>
      {newslist.map((note) => (
        <News
          image={note.image}
          key={note.id}
          title={note.title}
          owner={note.owner}
        />
      ))}
    </ul>
  );
};
