import bin from "../../assets/lixeira.png"
import pen from "../../assets/caneta.png"


import React from "react";
interface AllPosts {
  id: number;
  image?: string;
  title: string;
}

export const Posts: React.FC<AllPosts> = ({ image, title, id }) => {
  return (
    <li>
      <img src={image} alt="" />
      <h3>{title}</h3>
      <div>
        <img src={pen} />
        <img src={bin} />
      </div>
    </li>
  );
};