import { useContext } from "react";
import { RoutesMain } from "./routes/routes.tsx";
import { NewsProvider } from "./providers/NewsContext/NewsContext.tsx"; 
import { UserContext } from "./providers/UserContext/UserContext";

import "./index.css";

function App() {
  const { loading } = useContext(UserContext);

  return (
    
    <div className="w-full max-w-[1200px] mx-auto relative ">
      <NewsProvider>
        <main className="">
          {loading? <div className="min-h-[100vh] bg-white flex justify-center items-center"><h1 className="text-black text-[44px] font-bold font-lora">Carregando...</h1></div> :  <RoutesMain/>}
        </main>
      </NewsProvider>
    </div>
  )
 }

export default App;