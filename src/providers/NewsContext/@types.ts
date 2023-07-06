import { TPostForm } from "../../pages/Dasboard/newPostSchema";
import { IFormEdit } from "../../components/FormEdit/formEditSchema";

export interface INewsContext {
    newslist: INews[];
    currentNews : INews|null ;
    setCurrentNews: React.Dispatch<React.SetStateAction<INews | null>>;
    currentID:number|undefined;
    setCurrentID: React.Dispatch<React.SetStateAction<number|undefined>>;
    handleEditPost: (formData: IFormEdit, id: number) => Promise<void>;
    addNewPost: (formData: TPostForm) => Promise<void>;
    deletePost: (id: number) => Promise<void>;
    getNews: () => Promise<void>;
    postId: number ;
    setPostId: React.Dispatch<React.SetStateAction<number>>;
    getSpecificNews: (id: number) => Promise<void>;
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
    image: string;
}
