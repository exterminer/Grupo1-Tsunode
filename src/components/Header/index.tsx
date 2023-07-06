import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import back from "../../assets/Vector.png";
import { UserContext } from "../../providers/UserContext/UserContext";

export const Header = () => {
  const { userLogout,isUserLoggedIn } = useContext(UserContext);

  console.log(isUserLoggedIn)
  if (isUserLoggedIn == false) {
    return (
      <div className="flex justify-between py-[16px] px-[20px]">
        <Link to="/">
          <img src={logo} alt="Logo Kenzie Feed" />
        </Link>
        <Link to="/login">
          <button className="text-white text-xs text-base font-inter font-bold rounded-md bg-blue w-[77px] h-[34px]">
            Acessar
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="flex justify-between items-center h-[80px] bg-white ">
        <Link to="/">
          <img src={logo} alt="Logo Kenzie Feed" />
        </Link>
        <div className="flex flex-row items-center justify-between w-[120px]">
          <Link to="/dashboard">
            <button className="text-blue text-xs text-base font-inter font-bold rounded bg-white border-[1px] w-[77px] h-[34px]">
              Dashboard
            </button>
          </Link>
          <button onClick={userLogout}>
            <img src={back} alt="icone de saída" />
          </button>
        </div>
      </div>
    );
  }
};

// return (

//     <div className="flex justify-between py-[16px] px-[20px]">
//         <Link to="/">
//             <img src={logo} alt="Logo Kenzie Feed" />
//         </Link>
//         <Link to="/login">
//             <button className="text-white text-xs text-base font-inter font-bold rounded-md bg-blue w-[77px] h-[34px]">Acessar</button>
//         </Link>
//     </div>
// )
