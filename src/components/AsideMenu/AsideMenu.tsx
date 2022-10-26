import React, { useState } from "react";
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
        <button
          type="button"
          className="menu-content__button menu-content-element"
        >
          <img src={mainImage} alt="Главная" />
          <span>Главная</span>
        </button>
        <button
          type="button"
          className="menu-content__button menu-content-element"
        >
          <img src={searchImage} alt="Поиск адресов" />
          <span>Поиск адресов</span>
        </button>
        <button
          type="button"
          className="menu-content__button menu-content-element"
        >
          <img src={tablesImage} alt="Таблицы" />
          <span>Таблицы</span>
        </button>
        <button
          type="button"
          className="menu-content__button menu-content-element"
        >
          <img src={calendarImage} alt="Календарь" />
          <span>Календарь</span>
        </button>
        <button
          type="button"
          className="menu-content__button menu-content-element cards"
        >
          <img src={mapsImage} alt="Карты" className="cards__image" />
          <span>Карты</span>
        </button>
        <button
          type="button"
          className="menu-content__button menu-content-element"
        >
          <img src={widgetsImage} alt="Виджеты" />
          <span>Виджеты</span>
        </button>
        <button
          type="button"
          className="menu-content__button menu-content-element"
          onClick={() => setIsDropdownActive(!isDropdownActive)}
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
        </button>
        {isDropdownActive ? (
          <Dropdown
            isDropdownActive={isDropdownActive}
            onClick={setIsDropdownActive}
          />
        ) : null}
        <button
          type="button"
          className="menu-content__button menu-content-element"
        >
          <img src={exitImage} alt="Выход" />
          <span>Выход</span>
        </button>
      </div>
    </div>
  );
};

export default AsideMenu;
