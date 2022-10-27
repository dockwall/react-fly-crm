import React from "react";
import "./Address.scss";
import SearchImage from "./img/Search.svg";

const Address = () => {
  return (
    <div className="address-root">
      <h1>Поиск адресов</h1>
      <form className="address-form">
        <fieldset className="form-fieldset">
          <label htmlFor="address" className="form__label">
            Введите интересующий вас адрес
          </label>
          <div className="form-ui">
            <input
              className="form__input"
              type="text"
              name="address"
              minLength={3}
              placeholder="Введите интересующий вас адрес"
            />
            <button type="submit" className="form-submit__button">
              <img src={SearchImage} alt="Поиск" className="search-icon" />
              Поиск
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Address;
