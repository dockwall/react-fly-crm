import React from "react";
import "./assets/styles/index.scss";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <React.StrictMode>
      <Header />
      <div>Hello!</div>
    </React.StrictMode>
  );
};

export default App;
