import { Route, Routes } from "react-router-dom"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"

export const RoutesMain = () => {
    return (
        <Routes>
            <Route>
                <Route path="/" element={<Login/>}/>
                <Route path="/Register" element={<Register />}/>
            </Route>
            <Route>

            </Route>
        </Routes>
    )
}