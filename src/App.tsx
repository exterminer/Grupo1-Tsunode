import { useContext } from "react";
import { RoutesMain } from "./routes/routes.tsx";
import { UserContext } from "./providers/UserContext/UserContext"
import "./index.css"
import { NewsProvider } from "./providers/NewsContext/NewsContext.tsx";

function App() {
  const { loading } = useContext(UserContext);

  return (
    <div className="w-full max-w-[1200px] mx-auto ">

      <NewsProvider>
        <main className="bg-white">
        {loading? <h1>Carregando...</h1> :  <RoutesMain/>}
        </main>
      </NewsProvider>
     
    </div>
  )
}

export default App;