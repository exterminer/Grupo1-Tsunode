import { useContext } from "react";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod"; 
import { SubmitHandler, useForm } from "react-hook-form"

import { Input } from "../../components/Input";
import { TRegisterForm } from "./registerFormSchema";
import { Header } from "../../components/Header/index"
import { Footer } from "../../components/Footer/index"
import { registerFormSchema } from "./registerFormSchema";
import { UserContext } from "../../providers/UserContext/UserContext";

import arrow from "../../assets/arrowBack.svg"

export const Register = ()=> {
    const { register, handleSubmit, formState: { errors }} = useForm<TRegisterForm>({
        resolver: zodResolver(registerFormSchema)
    });

    const { userRegister } = useContext(UserContext);

    const submit: SubmitHandler<TRegisterForm> = (formData) => {
        userRegister(formData);
    }

    return (
        <div>
            <Header />
            <div className="flex py-[16px] px-[20px] gap-[80px]">
                <Link to="/login" className="flex justify-center items-center gap-3 bg-white w-[107px] h-[43px] border-[1px] border-blue rounded">
                    <img src={ arrow } alt="arrow Back" className="w-[18px] h-[18px]"/>
                    <button className="text-blue text-[14px] font-bold ">Voltar</button>
                </Link>
                <div className="w-[758px] h-[40vw] justify-center gap-5 items-center flex flex-col">
                    <h1 className="font-bold font-lora text-[44px]">Cadastre um usuário</h1>
                    <p className="text-[17px] font-normal mb-3">Preencha os campos corretamente para fazer o cadastro</p>
                    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap justify-between gap-2 w-[758px] h-[124px]">
                        <Input  type="text" placeholder="Nome" error={errors.name} {...register("name")} className="text-white text-[17px] font-inter  rounded bg-white border-2 border-black border-opacity-20 w-[370px] h-[56px] pl-4"/>
                        <Input  type="email" placeholder="E-mail" error={errors.email} {...register("email")} className="text-white text-[17px] font-inter  rounded bg-white border-2 border-black border-opacity-20 w-[370px] h-[56px] pl-4"/>
                        <Input  type="password" placeholder="Senha" error={errors.password} {...register("password")} className="text-white text-[17px] font-inter  rounded bg-white border-2 border-black border-opacity-20 w-[370px] h-[56px] pl-4"/>
                        <Input  type="password" placeholder="Confirmar senha" error={errors.confirmPassword} {...register("confirmPassword")} className="text-white text-[17px] font-inter  rounded bg-white border-2 border-black border-opacity-20 w-[370px] h-[56px] pl-4"/>
                    </form>
                    <button type="submit" className="bg-blue text-white rounded w-[166px] h-[54px] self-end">Cadastrar-se</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}