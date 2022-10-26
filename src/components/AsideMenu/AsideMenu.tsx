import React from "react";
import "./AsideMenu.scss";
import mainImage from "./img/main.svg";
import searchImage from "./img/search.svg";
import tablesImage from "./img/tables.svg";
import calendarImage from "./img/calendar.svg";
import mapsImage from "./img/maps.svg";
import widgetsImage from "./img/widgets.svg";
import settingsImage from "./img/settings.svg";
import exitImage from "./img/exit.svg";

const AsideMenu = () => {
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
        >
          <img src={settingsImage} alt="Настройки" />
          <span>Настройки</span>
        </button>
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
