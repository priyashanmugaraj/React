import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const HeaderComponent = () => {
  const [btnName, SetBtnName] = useState('login');
  return (
    <div className="header">
      <div className="logo">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName == 'login' ? SetBtnName('logout') : SetBtnName('login')
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
