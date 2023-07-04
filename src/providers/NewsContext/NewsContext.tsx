import { createContext, useState, useEffect, ReactNode } from "react";

import { api } from "../../service/api";
import { INewsContext, Ilike, INews } from "./@types";

export const NewsContext = createContext({} as INewsContext);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [news, setNews] = useState<INews[]>([]);
  const [currentID, setCurrentID] = useState("");
  const [currentNews, setCurrentNews] = useState<INews | null>(null);

  const getNews = async () => {
    try {
      const response = await api.get("/posts?_embed=likes");
      setNews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSpecificNews = async () => {
    try {
      const response = await api.get(`/posts/${currentID}?_embed=likes`);

      setCurrentNews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    if (currentID !== "") {
      getSpecificNews();
    }
  }, [currentID]);

  return (
    <NewsContext.Provider
      value={{ newslist: news, setCurrentID, CurrentNews: currentNews }}
    >
      {children}
    </NewsContext.Provider>
  );
};
