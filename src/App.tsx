import { RoutesMain } from "./routes/routes.tsx";
import { NewsProvider } from "./providers/NewsContext/NewsContext.tsx";
import { ToastContainer } from "react-toastify";

import "./index.css";

function App() {
  return (
    <div className="w-full max-w-[1200px] mx-auto relative ">
      <NewsProvider>
        <main className="">
          <RoutesMain />
          <ToastContainer/>
        </main>
      </NewsProvider>
    </div>
  );
}

export default App;
