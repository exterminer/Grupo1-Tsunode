import { useContext } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { IFormEdit } from "./formEditSchema"
import { NewsContext } from "../../providers/NewsContext/NewsContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { formEditSchema } from "./formEditSchema"

import arrow from "../../assets/arrowBack.svg"

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
    <section className="p-5 bg-grey h-full flex flex-col items-center">
        <div className="w-[800px]">
            <div className="flex flex-row justify-between items-center mx-auto my-6">
                <h1 className="text-black text-xl font-bold font-lora text-2xl mb-[15px]">Editando:</h1>
                <Link to="/" className="flex justify-center items-center gap-3 bg-white w-[107px] h-[43px] border-[1px] border-blue rounded">
                    <img src={ arrow } alt="arrow Back" className="w-[18px] h-[18px]"/>
                    <button className="text-blue text-[14px] font-bold ">Voltar</button>
                </Link>
        </div>
            <form className="flex flex-col" onSubmit={handleSubmit(submit)}>
                <label className="text-xs font-bold font-lora mb-1">Título</label>
                <input {...register("title")} className="border-none bg-white h-11 rounded-sm mb-3 p-4" type="text" placeholder="Digite o título do seu post" />
                {errors.title ? (
                <p className="text-xs font-bold font-lora mb-1 text-red-500">{errors.title.message}</p>
                ) : null}
                <label className="text-xs font-bold font-lora mb-1">Imagem em destaque</label>
                <input {...register("image")} className="border-none bg-white h-11 rounded-sm mb-3 p-4" type="url" placeholder="Digite o link da sua imagem" />
                {errors.image ? (
                <p className="text-xs font-bold font-lora mb-1 text-red-500">{errors.image.message}</p>
                ) : null}
                <label className="text-xs font-bold font-lora mb-1">Conteúdo</label>
                <textarea {...register("description")} className="border-none bg-white rounded-sm mb-8 p-4" rows={10} ></textarea>
                {errors.description ? (
                <p className="text-xs font-bold font-lora mb-1 text-red-500">{errors.description.message}</p>
                ) : null}
                <div className="flex justify-start">
                <button type="submit"  className="text-white font-bold text-xs text-base font-inter font-bold rounded-md bg-blue h-11 w-32 text-base">Salvar post</button>
                </div>
            </form>
        </div>
    </section>
        </>
    )

}