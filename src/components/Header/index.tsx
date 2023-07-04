import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <div className="flex justify-between py-[16px] px-[20px]">
            <img src={logo} alt="Logo Kenzie Feed" />
            <Link to="/login">
                <button className="text-white text-xs text-base font-inter font-bold rounded-md bg-blue w-[77px] h-[34px]">Acessar</button>
            </Link>
        </div>
    )
}

export const HeaderDash = () => {
    return (
<div>
    <img src={logo} alt="Logo Kenzie Feed" />
    <button>Dashboard</button>
</div>

    )
}