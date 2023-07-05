import { TPostForm } from "../../pages/Dasboard/newPostSchema";
import { IUser } from "../UserContext/@types";

export interface INewsContext {
    newslist: INews[];
    CurrentNews : INews|null ; 
    setCurrentID: React.Dispatch<React.SetStateAction<string>>;
    addNewPost: (formData: TPostForm) => Promise<void>
    deletePost: (id: number) => Promise<void>
}

export interface Ilike {
  quantidade: number| undefined;
}

export interface INews {
  image: string;
  title: string;
  description: string;
  owner: string;
  userId: number;
  id: number;
  likes: Ilike[];
}
