import { useContext } from "react"

import { RoutesMain } from "./routes/routes.tsx";
import { UserContext } from "./providers/UserContext/UserContext"

function App() {
  const { loading } = useContext(UserContext);

  return(
    <>
      <main>
      {loading? <h1>Carregando...</h1> :  <RoutesMain/>}
      </main>
    </>
  )
}

export default App;
