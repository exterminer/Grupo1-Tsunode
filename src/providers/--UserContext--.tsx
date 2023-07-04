// import { useState } from "react";
// import { createContext } from "react";
// import { useNavigate } from "react-router-dom";
// // import { useEffect } from "react";

// import { api } from "../service/api"

// export const UserContext = createContext({})

// export const UserProvider = ({children}) => {
//     const [news, setNews] = useState(null)

//     const navigate = useNavigate()

//     const showNews = async (formData) => {
//         try {
//             const { data } = await api.get("/posts?_embed=likes", formData)

//             setNews(data)
//         } catch (error) {
//            console.log(error) 
//         }
//     }

//     return(
//         <UserContext.Provider value = {{showNews, setNews}}>
//             {children}
//         </UserContext.Provider>
//     )
// }