import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../Header/Header";
import AsideMenu from "../AsideMenu/AsideMenu";
import "./Layout.scss";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="content-root">
        <AsideMenu />
        <div className="content-block">
          <Outlet />
          <Link to="/" />
          <Link to="/address" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
