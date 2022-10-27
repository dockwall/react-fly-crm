import React from "react";
import "./assets/styles/index.scss";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import News from "./components/News/News";
import Address from "./components/Address/Address";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<News />} />
          <Route path="/address" element={<Address />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
