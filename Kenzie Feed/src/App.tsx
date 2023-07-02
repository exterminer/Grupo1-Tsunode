import { RouterMain } from "./routes/routes";
import { NewsProvider } from "./providers/newsContext.tsx";
function App() {
  return (
    <>
      <NewsProvider>
        <RouterMain />
      </NewsProvider>
    </>
  );
}

export default App;
