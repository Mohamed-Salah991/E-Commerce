import React from "react";
import classes from "./Header.module.css";
import Search from "./Search";
import logo from "../../assets/Online-shop-logo.png";
import { FiBarChart2 } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

function Header() {
  const test = 9;
  return (
    <nav className={classes.header}>
      <div className="container">
        <section className={classes.up}>
          <div className={classes.logo}>
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className={classes.search}>
            <Search />
          </div>
          <div className={classes.icons}>
            <ul>
              <li>
                <FiBarChart2 className={classes.icon} />
                <span>5</span>
              </li>
              <li>
                <AiOutlineHeart className={classes.icon} />
                <span>5</span>
              </li>

              <li>
                <BsCart4 className={classes.icon} />
                <span>{test}</span>
              </li>
              <li>
                <FaUser className={classes.icon} />
              </li>
            </ul>
            <h4 className={["use-auth"]}>Login</h4>
          </div>
        </section>
        <section className={classes.down}></section>
      </div>
    </nav>
  );
}

export default Header;
