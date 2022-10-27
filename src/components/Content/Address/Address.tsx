import React, { FormEvent, useState } from "react";
import "./Address.scss";
import SearchImage from "./img/Search.svg";

const Address = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState({});

  const onAddressSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const token = "b83adb5ef07e8ef3fd9e91cacf280add0f36a922";

    const options: any = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Token " + token,
      },
      body: JSON.stringify({ query: searchTerm }),
    };

    const response: any = await fetch(
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
      options
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    setSearchResults(response);
  };

  return (
    <div className="address-root">
      <h1>Поиск адресов</h1>
      <form className="address-form" onSubmit={(e) => onAddressSubmit(e)}>
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
              required
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
