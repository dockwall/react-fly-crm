import React from "react";
import "./Header.scss";
import WrenchImage from "./img/Wrench.svg";

const Header = () => {
  return (
    <div className="root">
      <div className="content">
        <div className="content-label">
          <button type="button" className="content-label__button">
            <img
              className="content-label__button__img"
              src={WrenchImage}
              alt="Wrench"
            />
            Wrench CRM
          </button>
        </div>
        <div className="content-auth">Auth</div>
      </div>
    </div>
  );
};

export default Header;
