import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../service/api";
import { TLoginForm } from "../../pages/Login/loginFormSchema";
import { TRegisterForm } from "../../pages/Register/registerFormSchema";
import { IUserContext, IUserProviderProps, IUser, IUserLoginResponse } from "./@types";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<true | false>(false);

  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");

    const loadUser = async () => {
        try {
            setLoading(true);
            const {data} = await api.get(`/users/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUser(data);
            // setTechs(data.techs);
            navigate(currentPath);
        } catch (error) {
            console.log(error);
        } finally { setLoading(false) }
    }
    if(token) {
        loadUser();
    }
  }, []);

  const userLogin = async (formData: TLoginForm) => {
    try {
      setLoading(true);
      const { data } = await api.post<IUserLoginResponse>("/login", formData);
      localStorage.setItem("@TOKEN", data.accessToken);
      localStorage.setItem("@USERID", JSON.stringify(data.user.id));
      setUser(data.user);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    } finally { setLoading(false) }
  };
  
  const userRegister = async (formData: TRegisterForm) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      navigate("/Login");
    } catch (error) {
      console.log(error);
    } finally { setLoading(false) }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
  };

  return (
    <UserContext.Provider value={{ user, userRegister, userLogin, userLogout, loading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
