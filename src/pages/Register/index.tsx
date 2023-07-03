import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"; 
import { useContext } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { UserContext } from "../../providers/UserContext/UserContext";
// import { Header } from ;
// import { Footer } from;
import { registerFormSchema } from "./registerFormSchema";
import { TRegisterForm } from "./registerFormSchema";

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
            {/* <Header /> */}
            <main>
                <Link to="/">
                    <button>Voltar</button>
                </Link>
                <div>
                    <h1>Cadastre um usuário</h1>
                    <p>Preencha os campos corretamente para fazer o cadastro</p>
                    <form onSubmit={handleSubmit(submit)}>
                        <Input  type="text" placeholder="Nome" error={errors.name} {...register("name")}/>
                        <Input  type="email" placeholder="E-mail" error={errors.email} {...register("email")}/>
                        <Input  type="password" placeholder="Senha" error={errors.password} {...register("password")}/>
                        <Input  type="password" placeholder="Confirmar senha" error={errors.confirmPassword} {...register("confirmPassword")}/>
                        <button type="submit">Cadastrar-se</button>
                    </form>
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    )
}