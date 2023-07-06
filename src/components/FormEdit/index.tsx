import { useContext } from "react"
import { Link } from "react-router-dom"
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { IFormEdit } from "./formEditSchema"
import { formEditSchema } from "./formEditSchema"
import { NewsContext } from "../../providers/NewsContext/NewsContext"

import arrow from "../../assets/arrowBack.svg"

export const FormEdit = () => {
    const {handleSubmit, register, formState : {errors}} = useForm<IFormEdit>({
        resolver: zodResolver(formEditSchema)
    })
    // const {handleEditPost, currentNews} = useContext(NewsContext);

    // const id = currentNews?.id;

    // const submit: SubmitHandler< IFormEdit > = (formData, id) => {
    //     handleEditPost(formData, id)
    // }

    return (
        <section className="pr-5 pl-5 bg-grey h-full flex flex-col items-center">
            <div className="w-[918px]">
                <div className="flex flex-row justify-between items-center mx-auto my-6">
                    <h1 className="text-black font-bold font-lora text-[44px]">Editando:</h1>
                    <Link to="/dashboard" className="flex justify-center items-center gap-3 bg-grey w-[107px] h-[43px] border-[1px] border-blue rounded">
                        <img src={ arrow } alt="arrow Back" className="w-[18px] h-[18px]"/>
                        <button className="text-blue text-[14px] font-bold ">Voltar</button>
                    </Link>
                </div>
                <form className="flex flex-col" onSubmit={handleSubmit(submit)}>
                    <label className="text-base font-bold font-lora mb-1">Título</label>
                    <input {...register("title")} className="border-none bg-white h-11 rounded mb-3 p-4 " type="text"  />
                    {errors.title ? (
                    <p className="text-base font-bold font-lora mb-1 text-red-500">{errors.title.message}</p>
                    ) : null}
                    <label className="text-base font-bold font-lora mb-1">Imagem em destaque</label>
                    <input {...register("image")} className="border-none bg-white h-11 rounded mb-3 p-4" type="url" />
                    {errors.image ? (
                    <p className="text-base font-bold font-lora mb-1 text-red-500">{errors.image.message}</p>
                    ) : null}
                    <label className="text-base font-bold font-lora mb-1">Conteúdo</label>
                    <textarea {...register("description")} className="border-none bg-white rounded mb-8 p-4 h-[400px]" rows={10} ></textarea>
                    {errors.description ? (
                    <p className="text-base font-bold font-lora mb-1 text-red-500">{errors.description.message}</p>
                    ) : null}
                    <div className="flex justify-start">
                    <button type="submit"  className="text-white font-bold text-base text-base font-inter font-bold rounded-md bg-blue h-11 w-32 text-base">Salvar post</button>
                    </div>
                </form>
            </div>
        </section>
    )
}