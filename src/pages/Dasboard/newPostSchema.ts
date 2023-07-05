import { z } from "zod";

export const newPostSchema = z.object({
    title: z
        .string()
        .nonempty("Campo obrigatório"),
    image: z
        .string()
        .nonempty("Campo obrigatório."),
    description: z
        .string()
        .nonempty("Campo obrigatório")    
})

export type TPostForm = z.infer<typeof newPostSchema>;