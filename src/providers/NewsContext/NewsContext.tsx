import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { api } from "../../service/api";
import { INewsContext, Ilike, INews } from "./@types";
import { IEdit } from "./@types";
import { IFormEdit } from "../../components/FormEdit/formEditSchema";
import { UserContext } from "../UserContext/UserContext";

export const NewsContext = createContext({} as INewsContext);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [news, setNews] = useState<INews[]>([]);
  const [currentNews, setCurrentNews] = useState<INews | null>(null);
  const [post, setPost] = useState({} as IEdit)
  const {user} = useContext(UserContext)

  const getNews = async () => {
    try {
      const response = await api.get("/posts?_embed=likes");
      console.log(response.data)
      setNews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditNew = async(formData : IFormEdit , id:number) => {
    const token = localStorage.getItem("@TOKEN")
    try {
        const response = await api.put(`/posts/${id}`, {...formData, owner:user?.name, userId:user?.id}, {
          headers: { Authorization: `Bearer ${token}`}
        } )
        console.log(response)
        setPost(response.data)
    } catch (error) {
       console.log(error) 
    }
  }

  useEffect(() => {
    
    getNews();
  }, []);

  return (
    <NewsContext.Provider value={{ newslist: news, setCurrentNews, handleEditNew }}>
      {children}
    </NewsContext.Provider>
  );
};