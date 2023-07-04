import { Link } from "react-router-dom"

export const FormEdit = () => {
   
    return (
        <>
        <form>
            <div>
                <h1>Editando:</h1>
                <Link to="/">Voltar</Link>
            </div>
            <div>
                <label>Título</label>
                <input type="text" placeholder="Digite o título do seu post" />
                <label>Imagem em destaque</label>
                <input type="text" placeholder="Digite o link da sua imagem" />
                <label>Conteúdo</label>
                <textarea name="" id="" ></textarea>
                <button>Salvar post</button>
            </div>
        </form>
        </>
    )

}