import React from "react";
import "./Header.scss";
import ProfileImage from "./img/Profile.svg";
import Logo from "./img/Logo.svg";

const Header = () => {
  return (
    <div className="header-root">
      <div className="header-content">
        <button type="button" className="header__button">
          <img src={Logo} alt="Wrench CRM" />
        </button>
        <div className="content-auth">
          <button type="button" className="header__button">
            <img src={ProfileImage} alt="Перейти в профиль" />
          </button>
          <button type="button" className="header__button">
            Станислав Лешук
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
