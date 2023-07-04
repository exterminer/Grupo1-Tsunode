import { useContext } from "react"
import { NewsContext } from "../../../providers/newsContext"
import { News } from "../../../components/News/news"

export const LastNews = () => {
    const {newslist} = useContext(NewsContext)

return (
    <ul>
        {newslist.map((note) => ( 
            <News img={note.image} key = {note.id} title = {note.title} owner={note.owner}/>
        )
     )}
    </ul>
)

}