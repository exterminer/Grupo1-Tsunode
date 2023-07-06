import Modal from "react-modal";
import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

import Xsymbol from "../../assets/X symbol.svg";
import plus from "../../assets/Vectorplus.png";
import { TPostForm } from "./newPostSchema";
import { Input } from "../../components/Input";
import { Posts } from "../../components/posts";
import { newPostSchema } from "./newPostSchema";
import { Footer } from "../../components/Footer";
import { UserHeader } from "../../components/UserHeader";
import { UserContext } from "../../providers/UserContext/UserContext";
import { NewsContext } from "../../providers/NewsContext/NewsContext";

export const Dashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TPostForm>({
    resolver: zodResolver(newPostSchema),
  });

  const [modalIsOpen, setIsOpen] = useState(false);
  const { newslist, addNewPost } = useContext(NewsContext);
  const { user } = useContext(UserContext);

  const submitPosts: SubmitHandler<TPostForm> = (formData) => {
    addNewPost(formData);
    closeModal();
  };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const list = newslist.filter((newitem) => newitem.userId == user?.id);

  return (
    <div className=" min-h-[100vh]">
      <div>
        <UserHeader />
      </div>
      <main className="bg-grey px-[20px] py-[16px] h-[90vh] mb-[20px] overflow-auto">
        <div className="flex flex-row justify-between items-center mb-10">
          <h1 className="text-black text-[44px] font-bold font-lora">
            Suas publicações
          </h1>
          <button
            onClick={openModal}
            className="flex flex-row justify-center gap-5 items-center bg-blue w-[146px] h-[43px] rounded text-white"
          >
            <img src={plus} alt="mais" /> Novo post
          </button>
          <Modal isOpen={modalIsOpen} className="opacity-100">
            <span
              onClick={closeModal}
              className="fixed z-10 bg-black h-[100vh] w-[100vw] opacity-40"
            ></span>
            <div className="flex flex-col gap-9 justify-between bg-white w-[798px] h-[661px] fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 rounded p-8">
              <div className="flex flex-row justify-between items-start h-[45px]">
                <h1 className="text-black text-[44px] font-bold font-lora">
                  Novo post
                </h1>
                <img
                  src={Xsymbol}
                  onClick={closeModal}
                  alt="Close Modal X"
                  className="h-[22px] w-[22px]"
                />
              </div>
              <form
                onSubmit={handleSubmit(submitPosts)}
                className="flex flex-col gap-6 justify-center h-full items-end"
              >
                <Input
                  type="text"
                  placeholder="Titulo"
                  {...register("title")}
                  className="text-black text-[17px] font-inter  rounded bg-white border-2 border-black border-opacity-20 w-[734px] h-[56px] pl-4"
                />
                <Input
                  type="text"
                  placeholder="imagem em destaque"
                  {...register("image")}
                  className="text-black text-[17px] font-inter  rounded bg-white border-2 border-black border-opacity-20 w-[734px] h-[56px] pl-4"
                />
                <textarea
                  placeholder="Conteúdo do post"
                  {...register("description")}
                  className="text-black text-[17px] font-inter  rounded bg-white border-2 border-black border-opacity-20 w-[734px] h-[249px] pl-4 pt-4"
                />
                <button className="h-[64px] w-[166px] bg-blue text-white rounded text-[18px] font-bold font-inter">
                  Criar post
                </button>
              </form>
              <div>
                    <p className="text-red fixed left-[330px] bottom-[467px]">{errors.title?.message}</p>
                    <p className="text-red fixed left-[330px] bottom-[400px]">{errors.image?.message}</p>
                    <p className="text-red fixed left-[330px] bottom-[400px]">{errors.description?.message}</p>
                </div>
                
            </div>
          </Modal>
        </div>
        <ul className="flex flex-col gap-9">
          {list.map((post) => {
            return (
              <Posts
                image={post.image}
                title={post.title}
                id={post.id}
                key={post.id}
              />
            );
          })}
        </ul>
      </main>
      <Footer />
    </div>
  );
};
