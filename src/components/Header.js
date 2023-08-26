import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const HeaderComponent = () => {
  const [btnName, SetBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    console.log("Header Is Rendered.....");
  }, []);
  return (
    <div className="flex justify-between bg-green-50 shadow-md">
      <div className="logo">
        <img className=" w-44" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-2 m-2">
          <li className="px-4 text-xl">
            OnlineStatus:{onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/About">About Us</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="px-4 text-xl">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4 text-xl">Cart</li>
          <li className="px-4 text-xl bg-blue-200">
            <button
              className=" py-1"
              onClick={() => {
                btnName == "login" ? SetBtnName("logout") : SetBtnName("login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
