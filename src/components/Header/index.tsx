import logo from "../../assets/logo.svg"

export const Header = () => {
    return (
<div className="flex justify-between py-[16px] px-[20px]">
    <img src={logo} alt="Logo Kenzie Feed" />
    <button className="text-white text-xs text-base font-inter font-bold rounded-md bg-blue w-[77px] h-[34px]">Acessar</button>
</div>

    )
}