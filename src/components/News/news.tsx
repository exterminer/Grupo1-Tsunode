import React from "react";
import { Link } from "react-router-dom";
interface NewsProps {
  key: number;
  img: string | undefined;
  title: string;
  owner: string;
}

export const News: React.FC<NewsProps> = ({ img, title, owner }) => {
  return (
    <li>
      <img src={img} alt="" />
      <p>Por : {owner}</p>
      <h3>{title}</h3>

      <Link to={"/"}>Leia mais </Link>
    </li>
  );
};
