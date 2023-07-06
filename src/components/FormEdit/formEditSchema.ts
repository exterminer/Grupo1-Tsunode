import { z } from "zod";

export const formEditSchema = z.object({
    title: z
        .string()
        .nonempty("Campo obrigatório"),
    description: z
        .string()
        .nonempty("Campo obrigatório."),
    image:z
        .string().url()
        .nonempty("Campo obrigatório."),

})

export type IFormEdit = z.infer<typeof formEditSchema>;