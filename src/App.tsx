import React from "react";
import "./assets/styles/index.scss";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

const App = () => {
  return (
    <React.StrictMode>
      <Header />
      <Content />
    </React.StrictMode>
  );
};

export default App;
