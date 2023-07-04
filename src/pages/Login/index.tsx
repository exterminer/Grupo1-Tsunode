import { useContext } from "react";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod"; 
import { SubmitHandler, useForm } from "react-hook-form"

import  img  from "../../assets/LoginImg.png"

import { TLoginForm } from "./loginFormSchema";
import { Input } from "../../components/Input";
import { loginFormSchema } from "./loginFormSchema";
import { Header } from "../../components/Header/index"
import { Footer } from "../../components/Footer/index"
import { UserContext } from "../../providers/UserContext/UserContext";

export const Login = ()=> {
    const { register, handleSubmit, formState: { errors }} = useForm<TLoginForm>({
        resolver: zodResolver(loginFormSchema)
    }); 

    const { userLogin } = useContext(UserContext);

    const submit: SubmitHandler<TLoginForm> = (formData) => {
        userLogin(formData);
    }

    return (
        <div className="">
            <Header />
            <div className="flex justify-start gap-x-24 items-center py-[16px] px-[20px] h-full pt-20">
                <img src={img} alt="Imagem grande NoteBook caneca e caderno" className="w-[581px] h-[682px]"/>
                <div className="bg-white w-[429px] h-[465px] flex flex-col items-center justify-between pt-4">
                    <h1 className="text-black text-[44px] font-bold font-lora">Acesse o KenzieFeed</h1>
                    <p className="text-[17px]">Preencha os campos corretamente para fazer login</p>
                    <form onSubmit={handleSubmit(submit)} className="flex-column text-blue-400">
                        <Input  type="email" placeholder="E-mail" error={errors.email} {...register("email")} className="text-white text-[17px] font-inter  rounded bg-white border-2 border-black border-opacity-20 w-[370px] h-[56px] pl-4"/>
                        <Input  type="password" placeholder="Senha" error={errors.password} {...register("password")} className="text-white text-[17px] font-inter rounded bg-white border-2 border-black border-opacity-20 w-[370px] h-[56px] pl-4 mt-2"/>
                        <button type="submit" className="text-white text-[14px] font-inter font-bold rounded bg-blue w-[370px] h-[56px] mt-4">Entrar</button>
                    </form>
                    <p>Não é cadastrado?</p>
                    <Link to="/Register" className="text-blue underline-offset-2">Cadastre-se</Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}