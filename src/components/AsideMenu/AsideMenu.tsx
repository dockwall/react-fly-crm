import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";
import "./AsideMenu.scss";
import mainImage from "./img/main.svg";
import searchImage from "./img/search.svg";
import tablesImage from "./img/tables.svg";
import calendarImage from "./img/calendar.svg";
import mapsImage from "./img/maps.svg";
import widgetsImage from "./img/widgets.svg";
import settingsImage from "./img/settings.svg";
import settingsDropdownImage from "./img/settings-dropdown.svg";
import exitImage from "./img/exit.svg";

const AsideMenu = () => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  return (
    <div className="menu-root">
      <div className="menu-content">
        <p className="menu-content-title">Меню</p>
        <Link
          type="button"
          className="menu-content__button menu-content-element"
          to="/"
        >
          <img src={mainImage} alt="Главная" />
          <span>Главная</span>
        </Link>
        <Link
          type="button"
          className="menu-content__button menu-content-element"
          to="/address"
        >
          <img src={searchImage} alt="Поиск адресов" />
          <span>Поиск адресов</span>
        </Link>
        <Link
          type="button"
          className="menu-content__button menu-content-element"
          to="/"
        >
          <img src={tablesImage} alt="Таблицы" />
          <span>Таблицы</span>
        </Link>
        <Link
          type="button"
          className="menu-content__button menu-content-element"
          to="/"
        >
          <img src={calendarImage} alt="Календарь" />
          <span>Календарь</span>
        </Link>
        <Link
          type="button"
          className="menu-content__button menu-content-element cards"
          to="/"
        >
          <img src={mapsImage} alt="Карты" className="cards__image" />
          <span>Карты</span>
        </Link>
        <Link
          type="button"
          className="menu-content__button menu-content-element"
          to="/"
        >
          <img src={widgetsImage} alt="Виджеты" />
          <span>Виджеты</span>
        </Link>
        <Link
          type="button"
          className="menu-content__button menu-content-element"
          onClick={() => setIsDropdownActive(!isDropdownActive)}
          to="/"
        >
          <img src={settingsImage} alt="Настройки" />
          <span>Настройки</span>
          <img
            src={settingsDropdownImage}
            alt=""
            className={`settings-dropdown__image ${
              isDropdownActive ? "opened" : ""
            }`}
          ></img>
        </Link>
        {isDropdownActive ? (
          <Dropdown
            isDropdownActive={isDropdownActive}
            onClick={setIsDropdownActive}
          />
        ) : null}
        <Link
          type="button"
          className="menu-content__button menu-content-element"
          to="/"
        >
          <img src={exitImage} alt="Выход" />
          <span>Выход</span>
        </Link>
      </div>
    </div>
  );
};

export default AsideMenu;
