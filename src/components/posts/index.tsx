import { Link } from "react-router-dom";
import React, { useContext } from "react";


import pen from "../../assets/caneta.png";
import bin from "../../assets/lixeira.png";
import { NewsContext } from "../../providers/NewsContext/NewsContext";

interface AllPosts {
  id: number;
  image?: string;
  title: string;
}

export const Posts: React.FC<AllPosts> = ({ image, title, id }) => {
const { deletePost, getSpecificNews } = useContext(NewsContext)

return (
    <li className="flex flex-row justify-between items-center">
      <div className="flex flex-row items-center gap-10">
        <img src={image} alt="" className="h-[153px] w-[153px] rounded-3xl"/>
        <h3 className="text-[23px] font-lora font-bold">{title}</h3>
      </div>
      <div className="flex flex-row justify-between items-center h-[36px] w-[87px]">
        <Link to="/editnews">
          <img src={pen} onClick={() => getSpecificNews(id)}/>
        </Link>
        <img src={bin} onClick={() => deletePost(id)} />
      </div>
    </li>
  );
};