import React from "react";
import "./assets/styles/index.scss";
import Header from "./components/Header/Header";
import AsideMenu from "./components/AsideMenu/AsideMenu";

const App = () => {
  return (
    <React.StrictMode>
      <Header />
      <AsideMenu />
      <div>Hello!</div>
    </React.StrictMode>
  );
};

export default App;
