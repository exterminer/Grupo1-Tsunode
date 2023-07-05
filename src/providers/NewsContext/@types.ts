import { TPostForm } from "../../pages/Dasboard/newPostSchema";
import { IUser } from "../UserContext/@types";
import { IFormEdit } from "../../components/FormEdit/formEditSchema";

export interface INewsContext {
    newslist: INews[];
    setCurrentNews: React.Dispatch<React.SetStateAction<INews | null>>;
    handleEditNew: (formData: IFormEdit, id: number) => Promise<void>
    setCurrentID: React.Dispatch<React.SetStateAction<string>>;
    addNewPost: (formData: TPostForm) => Promise<void>
    deletePost: (id: number) => Promise<void>
    CurrentNews : INews|null ;
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

export interface IEdit {
    title: string;
    description: string;
    owner: string;
    userId: number;
    image: string
}
