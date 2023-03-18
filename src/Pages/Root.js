import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";

function Root() {
  return (
    <>
      <Header />
      <ul style={{ margin: "80px 10px", display: "flex" }}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/shop"}>Shop</Link>
        </li>
        <li>
          <Link to={"/details"}>Details</Link>
        </li>
      </ul>
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
