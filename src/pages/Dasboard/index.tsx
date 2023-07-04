import { Link } from "react-router-dom";
import back from "../../assets/Vector.png";
import plus from "../../assets/Vectorplus.png"
import { HeaderDash } from "../../components/Header";
import { useContext } from "react";
import { NewsContext } from "../../providers/newsContext";
import { Footer } from "../../components/Footer";
import { Posts } from "../../components/posts";
// import { INews } from "../../providers/newsContext"
import { UserContext } from "../../providers/UserContext/UserContext";


export const Dashboard = ()=> {
    const { newslist } = useContext(NewsContext);
    const  idUser = localStorage.getItem("@USERID")
    // const { user } = useContext(UserContext)
    console.log(idUser)

    // console.log(newslist)
    
    //  const list =  newslist.filter((new) => {new.userId == user.id})
    {console.log(newslist.length)}
      return (
          <>
        <div>
            <HeaderDash />
            <Link to="/">
                    <img src={back} alt="icone de saída" />
            </Link>
        </div>
            <main>
                <div>
                   <h1>Suas publicações</h1>
                   <button><img src={plus} alt="mais" /> Novo post </button>
                </div>
                {
                newslist?.length === 0 ? (
                <head>la ele</head>
                    ):(
                        newslist.filter((post) => post.id === 1 ).map((post) => (
                            <Posts
                            image={post.image}
                            title={post.title}
                            id={post.id}
                            key={post.id}
                            />
                        ))
                 )}
                    {/* {list.map((post) => {
                        return(
                            <Posts
                             image={post.image}
                             title={post.title}
                             id={post.id}
                             key={post.id}
                            />
                        )
                    })} */}
            </main>
            <Footer />
        </>
    )
}