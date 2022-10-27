import React from "react";
import AsideMenu from "./AsideMenu/AsideMenu";
import "./Content.scss";

const Content = () => {
  return (
    <div className="content-root">
      <AsideMenu />

      <div className="content-block">Hello!</div>
    </div>
  );
};

export default Content;
