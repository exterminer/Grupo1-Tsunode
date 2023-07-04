import { Route, Routes } from "react-router-dom";
import { AllNews } from "../pages/AllNews/AllNews";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { HomeNews } from "../pages/HomeNews";
import { EditNews } from "../pages/EditNews";

export const RoutesMain = () => {

  return (
    <Routes>
      <Route>
        <Route path="/" element={<HomeNews />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allnews" element={<AllNews />} />
        <Route path="/editnews" element={<EditNews />} />
      </Route>
      <Route>
        <Route path="/editnews" element={<EditNews />} />
      </Route>
    </Routes>
  );
};
