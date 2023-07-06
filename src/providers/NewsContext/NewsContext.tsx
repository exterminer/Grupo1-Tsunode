import { createContext, useState, useEffect, ReactNode, useContext } from "react";

import { IEdit } from "./@types";
import { api } from "../../service/api";
import { INewsContext, INews } from "./@types";
import { UserContext } from "../UserContext/UserContext";
import { TPostForm } from "../../pages/Dasboard/newPostSchema";
import { IFormEdit } from "../../components/FormEdit/formEditSchema";

export const NewsContext = createContext({} as INewsContext);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [news, setNews] = useState<INews[]>([]);
  const [currentID, setCurrentID] = useState();
  const [currentNews, setCurrentNews] = useState<INews | null>(null);
  const [post, setPost] = useState({} as IEdit);
  const [postId, setPostId] = useState();
  const { user, setLoading } = useContext(UserContext);

  const token = localStorage.getItem("@TOKEN");
  
  const getNews = async () => {
    try {
      setLoading(true);
      const response = await api.get("/posts?_embed=likes");
      setNews(response.data);
    } catch (error) {
      console.log(error);
    } finally { setLoading(false) }
  };
// ------------------------------------------------------------------------editfunction_
  const handleEditPost = async (formData: IFormEdit, id:number) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);
      const response = await api.put(`/posts/${id}`, { ...formData, owner: user?.name, userId: user?.id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response);
      setPost(response.data);

    } catch (error) {
      console.log(error);
      console.log(id)
    } finally { setLoading(false) }
  };

  const getSpecificNews = async (id:number) => {
    try {
      const {data} = await api.get(`/posts/${id}?_embed=likes`);
      setCurrentNews(data);
    } catch (error) {
      console.log(error);
    } 
  };
 
  const addNewPost = async (formData: TPostForm) => {
    try {
      setLoading(true);
      const body = {
        ...formData,
        owner: user?.name,
        userId: user?.id,
      };
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const { data } = await api.post("/posts", body, { headers });
      setNews([...news, data]);
    } catch (error) {
      console.log(error);
    } finally{ setLoading(false) }
  };

  const deletePost = async (id: number) => {
    try {
      setLoading(true);
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await api.delete(`/posts/${id}`, { headers });
      setNews(news.filter((post) => post.id != id));
    } catch (error) {
      console.log(error);
    } finally { setLoading(false) }
  };

  // useEffect(() => {
  //   if (currentID !== "") {
  //     getSpecificNews(id);
  //   }
  // }, [currentID]);

  return (
    <NewsContext.Provider value={{newslist: news, currentNews, addNewPost, deletePost, handleEditPost, setCurrentNews, getNews, getSpecificNews, currentID, setCurrentID, postId, setPostId }}>
      {children}
    </NewsContext.Provider>
  );
};
