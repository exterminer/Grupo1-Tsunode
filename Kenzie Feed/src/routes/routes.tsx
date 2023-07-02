import { Route, Routes } from "react-router-dom";
import { AllNews } from "../pages/AllNews/AllNews";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/allNews" element={<AllNews />} />
    </Routes>
  );
};
