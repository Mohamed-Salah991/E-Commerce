import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
