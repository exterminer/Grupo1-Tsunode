import { useContext } from "react"
import "./index.css"
import { RoutesMain } from "./routes/routes.tsx";
import { UserContext } from "./providers/UserContext/UserContext"
import "./index.css"
function App() {
  const { loading } = useContext(UserContext);

  return (
    <>
      <main className="">
      {loading? <h1>Carregando...</h1> :  <RoutesMain/>}
      </main>
    </>
  )
}

export default App;
