import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"; 
import { useContext } from "react";
import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { UserContext } from "../../providers/UserContext/UserContext";
// import { Header } from ;
// import { Footer } from;
import { loginFormSchema } from "./loginFormSchema";
import { TLoginForm } from "./loginFormSchema";

export const Login = ()=> {
    const { register, handleSubmit, formState: { errors }} = useForm<TLoginForm>({
        resolver: zodResolver(loginFormSchema)
    }); 

    const { userLogin } = useContext(UserContext);

    const submit: SubmitHandler<TLoginForm> = (formData) => {
        userLogin(formData);
    }

    return (
        <div>
            {/* <Header /> */}
            <main>
                <img src="Imagem grande NoteBook caneca e caderno" alt="" />
                <div>
                    <h1>Acesse o KenzieFeed</h1>
                    <p>Preencha os campos corretamente para fazer login</p>
                    <form onSubmit={handleSubmit(submit)}>
                        <Input label="E-mail" type="email" placeholder="E-mail" error={errors.email} {...register("email")}/>
                        <Input label="Senha" type="password" placeholder="Senha" error={errors.password} {...register("password")}/>
                        <button type="submit">Entrar</button>
                    </form>
                    <p>Não é cadastrado?</p>
                    <Link to="/Register">Cadastre-se</Link>
                </div>
            </main>
            {/* <Footer /> */}
        </div>
    )
}