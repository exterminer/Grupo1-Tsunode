import { RouterMain } from "./routes/routes";
import { NewsProvider } from "./providers/newsContext.tsx";
import "../index.css";
function App() {
  return (
    <>
      <div className="bg-white h-screen">
        <NewsProvider>
          <RouterMain />
        </NewsProvider>
      </div>
    </>
  );
}

export default App;
