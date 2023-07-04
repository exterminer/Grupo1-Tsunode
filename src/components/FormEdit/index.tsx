import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { IFormEdit } from "./formEditSchema"
import { NewsContext } from "../../providers/NewsContext/NewsContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { formEditSchema } from "./formEditSchema"

export const FormEdit = () => {
    const {handleSubmit, register, formState : {errors}} = useForm<IFormEdit>({
        resolver: zodResolver(formEditSchema)
    })
    const {handleEditNew} = useContext(NewsContext)
   
const submit = (formData : IFormEdit) => {
    
    
    handleEditNew(formData, 1)
    console.log(formData)
}
console.log(errors)
    return (
        <>
    <section className="p-5 bg-grey h-full">
        <div className="flex flex-row justify-between my-6">
            <h1 className="text-black text-xl font-bold font-lora text-2xl mb-[15px]">Editando:</h1>
            <Link to="/">
                <button className="text-white text-xs text-base font-inter font-bold rounded-md bg-blue w-[77px] h-[34px]">Voltar</button>
            </Link>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit(submit)}>
            <label>Título</label>
            <input {...register("title")} className="border-2 border-black" type="text" placeholder="Digite o título do seu post" />
            <label>Imagem em destaque</label>
            <input {...register("image")} className="border-2 border-black" type="url" placeholder="Digite o link da sua imagem" />
            <label>Conteúdo</label>
            <textarea {...register("description")} className="border-2 border-black"></textarea>
            <div className="flex justify-start">
            <button type="submit"  className="text-white font-bold text-xs text-base font-inter font-bold rounded-md bg-blue h-11 w-32 text-base">Salvar post</button>
            </div>
        </form>
    </section>
        </>
    )

}