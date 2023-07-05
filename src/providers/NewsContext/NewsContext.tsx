import { createContext, useState, useEffect, ReactNode, useContext } from "react";

import { api } from "../../service/api";
import { INewsContext, Ilike, INews } from "./@types";
import { IUserContext, IUser } from "../UserContext/@types";
import { UserContext } from "../UserContext/UserContext";
import { TPostForm } from "../../pages/Dasboard/newPostSchema";

export const NewsContext = createContext({} as INewsContext);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [news, setNews] = useState<INews[]>([]);
  const [currentID, setCurrentID] = useState("");
  const [currentNews, setCurrentNews] = useState<INews | null>(null);

  const { user  } = useContext(UserContext) 
  const token = localStorage.getItem("@TOKEN")

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
  console.log(user)

  const addNewPost = async (formData: TPostForm) => {
    try {
      const body = {
        ...formData,
        owner: user?.name,
        userId: user?.id,
      }
      const headers = {
        Authorization: `Bearer ${token}`
      }
      console.log(body)
      const {data} = await api.post("/posts", body, {headers})
      setNews([...news, data])
      console.log(data)
    } catch (error) {
    }
  }
  const deletePost = async (id: number) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`
      }
      await api.delete(`/posts/${id}`, {headers})
      setNews(news.filter((post) =>post.id != id ))
    } catch (error) {
      console.log(error) 
    }
  }
  
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
      value={{ newslist: news, setCurrentID, CurrentNews: currentNews, addNewPost, deletePost }}
    >
      {children}
    </NewsContext.Provider>
  );
};
