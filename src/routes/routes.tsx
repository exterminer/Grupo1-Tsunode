import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { AllNews } from "../pages/AllNews/AllNews";
import { HomeNews } from "../pages/HomeNews";
import { InternPage } from "../pages/internPage/internPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<HomeNews />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allnews" element={<AllNews />} />
        <Route path="/internpage" element={<InternPage />} />
      </Route>
      <Route></Route>
    </Routes>
  );
};
