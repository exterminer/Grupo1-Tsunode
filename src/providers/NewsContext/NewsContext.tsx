import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";
import { INewsContext, INews } from "./@types";
import { UserContext } from "../UserContext/UserContext";
import { TPostForm } from "../../pages/Dasboard/newPostSchema";
import { IFormEdit } from "../../components/FormEdit/formEditSchema";

export const NewsContext = createContext({} as INewsContext);

export const NewsProvider = ({ children }: { children: ReactNode }) => {
  const [news, setNews] = useState<INews[]>([]);
  const [currentID, setCurrentID] = useState(0);
  const [currentNews, setCurrentNews] = useState<INews | null>(null);
  const navigate = useNavigate();

  const { user, setLoading } = useContext(UserContext);

  const token = localStorage.getItem("@TOKEN");

  const like = async (userId: number, id: number) => {
    try {
      const body = {
        userId: userId,
        postId: id,
      };
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await api.post("/likes", body, { headers });
      getSpecificNews(id);
    } catch (error) {
      toast.error("Para interagir com  a publicaçao é necessario estar logado");
      navigate("/login")
    }
  };

  const deslike = async (
    id: number | undefined,
    postId: number | undefined
  ) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await api.delete(`/likes/${id}`, { headers });
      getSpecificNews(postId);
    } catch (error) {
      toast.error("Para curtir a publicaçao é necessario estar logado");
      navigate("/login")
    }
  };

  const getNews = async () => {
    try {
      setLoading(true);
      const response = await api.get("/posts?_embed=likes");
      setNews(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditPost = async (
    formData: IFormEdit,
    id: number | null | undefined
  ) => {
    const token = localStorage.getItem("@TOKEN");

    try {
      setLoading(true);
      const response = await api.put(
        `/posts/${id}`,
        { ...formData, owner: user?.name, userId: user?.id },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCurrentNews(response.data);
      getNews();
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const getSpecificNews = async (id: number | undefined) => {
    try {
      const { data } = await api.get(`/posts/${id}?_embed=likes`);
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
    } finally {
      setLoading(false);
    }
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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    if (currentID !== 0) {
      getSpecificNews(currentID);
    }
  }, [currentID]);

  return (
    <NewsContext.Provider
      value={{
        newslist: news,
        currentNews,
        addNewPost,
        deletePost,
        handleEditPost,
        setCurrentNews,
        getNews,
        getSpecificNews,
        currentID,
        setCurrentID,
        like,
        deslike,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
