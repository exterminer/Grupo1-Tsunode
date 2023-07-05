import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../service/api";
import { TRegisterForm } from "../../pages/Register/registerFormSchema";
import { IUserContext, IUserProviderProps, IUser, IUserLoginResponse } from "./@types";
import { TLoginForm } from "../../pages/Login/loginFormSchema";

export const UserContext = createContext({} as IUserContext);

// interface ILoading {
//     loading:boolean;
// }

export const UserProvider = ({children}: IUserProviderProps)=> {
    const [user, setUser] = useState<IUser | null>();
    // const [userNews, setUserNews] = useState<IUser | null>(null);
    const [loading, setLoading] = useState<true | false>(false);

    // const currentPath = window.location.pathname;
    const navigate = useNavigate();

    const userRegister = async (formData: TRegisterForm) => {
        try {
            const { data } = await api.post("/users", formData);
            console.log(data);
            // navigate("/Login");
        } catch (error) {
            console.log(error);
        }
    }

    // const getUser = async () => {
    //     try {
    //         const response = await api.get("/posts?_embed=likes");
    //         // console.log(response.data)
    //         setUserNews(response.data.filter((new) => {new.userId == user.id}));
    //       } catch (error) {
    //         console.log(error);
    //       }
    //     }
    // }
      
    const userLogin = async (formData: TLoginForm) => {
        try {
            // setLoading(true);
            const { data } = await api.post<IUserLoginResponse>("/login", formData);
            
            localStorage.setItem("@TOKEN", data.accessToken);
            localStorage.setItem("@USERID", JSON.stringify(data.user.id));
            console.log(data.user)
            setUser(data.user);
            navigate("/dashboard");
        } catch (error) {
            console.log(error);
        } finally{
            // setLoading(false);
        }
    }

    const userLogout = () => {
        setUser(null);
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
        navigate("/");
    }

    return(
        <UserContext.Provider value={{ user, userRegister, userLogin, userLogout, loading }}>
            {children}
        </UserContext.Provider>
    )
}
