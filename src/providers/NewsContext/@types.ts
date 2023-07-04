export interface INewsContext {
    newslist: INews[];
    CurrentNews : INews|null ; 
    setCurrentID: React.Dispatch<React.SetStateAction<string>>;
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
