import React from "react";
import AsideMenu from "./AsideMenu/AsideMenu";
import "./Content.scss";
import News from "./News/News";

const Content = () => {
  return (
    <div className="content-root">
      <AsideMenu />

      <div className="content-block">
        <News />
      </div>
    </div>
  );
};

export default Content;
