

export interface INewsContext {
    newslist: INews[];
    setCurrentNews: React.Dispatch<React.SetStateAction<INews | null>>;
}
  
export interface Ilike {
    quantidade: number;
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