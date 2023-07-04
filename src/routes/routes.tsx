import { Route, Routes } from "react-router-dom";

import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { HomeNews } from "../pages/HomeNews";
import { Dashboard } from "../pages/Dasboard";
import { AllNews } from "../pages/AllNews/AllNews";
import { PublicRoutes } from "../components/PublicRoutes";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import { EditNews } from "../pages/EditNews";
import { InternPage } from "../pages/internpage/internpage";

export const RoutesMain = () => {

  return (
    <Routes>
      <Route>
        <Route path="/" element={<HomeNews />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allnews" element={<AllNews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/internpage" element={<InternPage/>} />
      </Route>
      <Route>
      <Route path="/editnews" element={<EditNews />} />
      </Route>
    </Routes>
  );
};
