import React from "react";
import "./Dropdown.scss";
import profileSettings from "../img/profile-settings.svg";
import financesSettings from "../img/finances-settings.svg";

interface DropdownProps {
  isDropdownActive: boolean;
  onClick: any;
}

const Dropdown = (props: DropdownProps) => {
  return (
    <div className="dropdown-root">
      <div className="dropdown-content">
        <button
          type="button"
          className="dropdown-content__button"
          onClick={() => props.onClick(!props.isDropdownActive)}
        >
          <img src={profileSettings} alt="Настройки профиля" />
          <span>Настройки профиля</span>
        </button>
        <button
          type="button"
          className="dropdown-content__button"
          onClick={() => props.onClick(!props.isDropdownActive)}
        >
          <img src={financesSettings} alt="Управление финансами" />
          <span>Управление финансами</span>
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
