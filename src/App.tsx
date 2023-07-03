import { useContext } from "react"
import "./index.css"
import { RoutesMain } from "./routes/routes.tsx";
import { UserContext } from "./providers/UserContext/UserContext"

function App() {
  const { loading } = useContext(UserContext);

  return(
    <>
      <main className="bg-red-300">
      {loading? <h1>Carregando...</h1> :  <RoutesMain/>}
      </main>
    </>
  )
}

export default App;
