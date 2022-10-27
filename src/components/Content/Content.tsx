import React from "react";
import Address from "./Address/Address";
import News from "./News/News";
import AsideMenu from "./AsideMenu/AsideMenu";
import "./Content.scss";

const Content = () => {
  return (
    <div className="content-root">
      <AsideMenu />

      <div className="content-block">
        <Address />
      </div>
    </div>
  );
};

export default Content;
