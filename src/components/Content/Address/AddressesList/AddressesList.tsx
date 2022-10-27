import React from "react";
import "./AddressesList.scss";

interface props {
  searchResults: any;
}

const AddressesList = (props: props) => {
  const renderedAddresses = props.searchResults.suggestions.map(
    (element: any) => {
      return (
        <div
          key={element.unrestricted_value}
          className="addresses-list-element"
        >
          <p>{element.value}</p>
        </div>
      );
    }
  );

  return (
    <div className="addresses-list-root">
      <h1 className="addresses-list-title">Адреса</h1>
      {renderedAddresses}
    </div>
  );
};

export default AddressesList;
