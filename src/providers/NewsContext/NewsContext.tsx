import { createContext, useState, useEffect, ReactNode } from "react";
import { api } from "../../service/api";
import { INewsContext, Ilike, INews } from "./@types";

export const NewsContext = createContext({} as INewsContext);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [news, setNews] = useState<INews[]>([]);
  const [currentNews, setCurrentNews] = useState<INews | null>(null);

  const getNews = async () => {
    try {
      const response = await api.get("/posts?_embed=likes");
      console.log(response.data)
      setNews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    
    getNews();
  }, []);

  return (
    <NewsContext.Provider value={{ newslist: news, setCurrentNews }}>
      {children}
    </NewsContext.Provider>
  );
};