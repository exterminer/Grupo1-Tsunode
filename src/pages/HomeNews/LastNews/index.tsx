import { useContext } from "react";
import { NewsContext } from "../../../providers/NewsContext/NewsContext";
import { News } from "../../../components/News/news";

export const LastNews = () => {
  const { newslist } = useContext(NewsContext);

  return (
    <ul className=" flex gap-[14px] flex-wrap">
      {newslist.map((note) => (
        <News
          image={note.image}
          key={note.id}
          title={note.title}
          owner={note.owner}
          id={note.id}
        />
      ))}
    </ul>
  );
};