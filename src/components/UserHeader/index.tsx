import { useContext } from "react";
import { Link } from "react-router-dom"

import logo from "../../assets/logo.svg"
import back from "../../assets/Vector.png";
import { UserContext } from "../../providers/UserContext/UserContext";

export const UserHeader = () => {
    const { userLogout } = useContext(UserContext);


    return (
        <div className="flex justify-between items-center h-[80px] bg-white ">
            <Link to="/">
                <img src={logo} alt="Logo Kenzie Feed" />
            </Link>
            <div className="flex flex-row items-center justify-between w-[120px]">
            <Link to="/dashboard">
                <button className="text-blue text-xs text-base font-inter font-bold rounded bg-white border-[1px] w-[77px] h-[34px]">Dashboard</button>
            </Link>
            <button onClick={userLogout}> <img src={back} alt="icone de saída" /></button>
            </div>
        </div>
    )
}