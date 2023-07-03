import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeNews } from "../pages/HomeNews";

export const RoutesMain = () => {
    return (
    <Router>
        <Routes>
            <Route path="/" element = {<HomeNews />}></Route>
        </Routes>
    </Router>
    )
}