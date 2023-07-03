import { useContext } from "react"
import "./index.css"
import { RoutesMain } from "./routes/routes.tsx";
import { UserContext } from "./providers/UserContext/UserContext"
import "./index.css"
import { NewsProvider } from "./providers/newsContext.tsx";
function App() {
  const { loading } = useContext(UserContext);

  return (
    <>

      <NewsProvider>
        <main className="bg-red-300">
        {loading? <h1>Carregando...</h1> :  <RoutesMain/>}
        </main>
      </NewsProvider>

    </>
  )
}

export default App;
