import React from "react";
import classes from "./Header.module.css";
import HeaderSearch from "./HeaderSearch";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
// Image
import logo from "../../assets/Online-shop-logo.png";
import barChart from "../../assets/bar-chart.png";
import heart from "../../assets/heart.png";
import shoppingCart from "../../assets/shopping-cart.png";
import user from "../../assets/user.png";

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
            <HeaderSearch />
          </div>
          <div className={classes.icons}>
            <ul>
              <li>
                <img src={barChart} alt="barChart" />
                <span>5</span>
              </li>
              <li>
                <img src={heart} alt="heart" />
                <span>5</span>
              </li>

              <li>
                <img src={shoppingCart} alt="shoppingCart" />
                <span>{test}</span>
              </li>
              <li>
                <img src={user} alt="user" />
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
