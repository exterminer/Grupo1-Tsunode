import React from "react";
import { Link } from "react-router-dom";
interface NewsProps {
  key: number;
  image: string;
  title: string;
  owner: string;
}

export const News: React.FC<NewsProps> = ({ image, title, owner }) => {
  return (
    <div className="flex">
      <li className="w-full max-w-[573px] min-w-250">
        <img src={image} alt="" className="rounded-[1.5rem]  h-284 mb-[12px]" />
        <p className="text-black text-base font-inter font-normal mb-[7px]">
          Por : {owner}
        </p>
        <h3 className="text-black text-lg font-lora font-bold mb-[12px]">
          {title}
        </h3>

        <Link
          className="text-blue text-base font-inter font-normal"
          to={"/"}
        >
          Leia mais{" "}
        </Link>
      </li>
    </div>
  );
};
