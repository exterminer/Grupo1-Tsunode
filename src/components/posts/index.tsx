import bin from "../../assets/lixeira.png"
import pen from "../../assets/caneta.png"

import React, { useContext } from "react";
import { NewsContext } from "../../providers/NewsContext/NewsContext";
import { UserContext } from "../../providers/UserContext/UserContext";

interface AllPosts {
  id: number;
  image?: string;
  title: string;
}

export const Posts: React.FC<AllPosts> = ({ image, title, id }) => {
const { deletePost } = useContext(NewsContext)
// console.log(user.id)


  return (
    <li>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <div>
        <img src={pen} />
        <img src={bin} onClick={() => deletePost(id)} />
      </div>
    </li>
  );
};