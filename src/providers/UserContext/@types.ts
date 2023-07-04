import { TRegisterForm } from "../../pages/Register/registerFormSchema";
import { TLoginForm } from "../../pages/Login/loginFormSchema";
import { IFormEdit } from "../../components/FormEdit/formEditSchema";

export interface IUserProviderProps {
    children:React.ReactNode;
}

export interface IUser {
    name: string;
    email: string;
    id: number;
}

export interface IUserLoginResponse {
    accessToken: string;
    user:IUser;
}

export interface IUserContext{
    user: IUser | null;
    userRegister: (formData: TRegisterForm) => Promise<void>;
    userLogin: (formData: TLoginForm) => Promise<void>;
    userLogout: () => void;
    loading: true | false;
    
}

export interface IEdit {
    title: string;
    description: string;
    owner: string;
    userId: number;
    image: string
}
