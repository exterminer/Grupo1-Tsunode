import back from "../../assets/Vector.png";
import plus from "../../assets/Vectorplus.png";
import Modal from "react-modal";

import { HeaderDash } from "../../components/Header";
import { useContext, useState } from "react";
import { NewsContext } from "../../providers/NewsContext/NewsContext";
import { Footer } from "../../components/Footer";
import { Posts } from "../../components/posts";
import { UserContext } from "../../providers/UserContext/UserContext";
import { Input } from "../../components/Input";
import { useForm, SubmitHandler } from "react-hook-form"
import { newPostSchema } from "./newPostSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TPostForm } from "./newPostSchema";

export const Dashboard = ()=> {
    const [modalIsOpen, setIsOpen] = useState(false)
    const { newslist, addNewPost, deletePost } = useContext(NewsContext)
    const { user, userLogout } = useContext(UserContext)
    const { register, handleSubmit, formState: { errors }} = useForm<TPostForm>({
        resolver: zodResolver(newPostSchema)
    })

     const submitPosts: SubmitHandler<TPostForm> = (formData) => {
        addNewPost(formData)
      }
    // console.log(newslist)
    // console.log(user)
    const openModal = () => { 
        setIsOpen ( true ) ; 
      }    
    const closeModal = () => { 
        setIsOpen ( false ) ; 
      }
    
    const list =  newslist.filter(newitem => newitem.userId == user.id)

    return (
        <>
        <div>
            <HeaderDash />
            <button onClick={userLogout}> <img src={back} alt="icone de saída" /></button>
        </div>
            <main>
                <div>
                   <h1>Suas publicações</h1>
                   <button onClick={openModal} ><img src={plus} alt="mais" /> Novo post</button>
                   <Modal isOpen = { modalIsOpen } >
                      <h1>novo post</h1>
                      <button onClick={closeModal}> x </button>
                      <form onSubmit={handleSubmit(submitPosts)}>
                        <Input type="text" placeholder="Titulo" {...register("title")}/>
                        <Input type="text" placeholder="imagem em destaque" {...register("image")}/>  
                        <textarea placeholder="Conteúdo do post" {...register("description")}/>  
                        <button>Criar post</button>
                      </form>
                   </Modal>
                </div>

                    {list.map((post) => {
                        return(
                            <Posts
                             image={post.image}
                             title={post.title}
                             id={post.id}
                             key={post.id}
                            />
                        )
                    })}
            </main>
            <div className="min-h-[100vh]">
            <Footer />

            </div>
        </>
    )
}