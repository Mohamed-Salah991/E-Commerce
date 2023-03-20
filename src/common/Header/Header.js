import React from "react";
import classes from "./Header.module.css";
import Search from "./Search";
import logo from "../../assets/Online-shop-logo.png";
import { FiBarChart2 } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const test = 9;
  return (
    <nav className={classes.header}>
      <section className={classes["small-screen"]}>
        <div className={classes["bottom-icons"]}>
          <ul>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <AiOutlineHome />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                <BsCart4 />
                <span>Shop</span>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <BiShoppingBag />
                <span>Cart</span>
              </NavLink>
            </li>
            <li>
              <NavLink>
                <AiOutlineHeart />
                <span>Whish List</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </section>

      <section className={classes.up}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
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
              <Link to="/cart">
                <BsCart4 className={classes.icon} />
                <span>{test}</span>
              </Link>
            </li>
            <li>
              <AiOutlineUser className={classes.icon} />
            </li>
          </ul>
          <h4 className={["use-auth"]}>Login</h4>
        </div>
      </section>
      <section className={classes.down}></section>
    </nav>
  );
}

export default Header;
