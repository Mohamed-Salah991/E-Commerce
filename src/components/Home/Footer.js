import React from "react";
import classes from "./Footer.module.css";
import logo from "../../assets/Online-shop-logo.png";

function Footer() {
  return (
    <div className={classes.footer}>
        <div className={classes.content}>
            <div className={classes["company-info"]}>
            <a href="/">
                <img src={logo} alt="" />
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores voluptatem quibusdam consequatur ad quod tenetur?
                Placeat molestiae quae perferendis repudiandae, eius illo maiores
                illum soluta obcaecati a, eaque quis eum!
                </p>
                <div className={classes.apps}>
                <div className={classes["app-box"]}>
                    <div className={classes.image}>
                    <img src="" alt="" />
                    </div>
                    <div className={classes.text}>
                    <span>Get In On</span>
                    <h4>Google Play</h4>
                    </div>
                </div>
                <div className={classes["app-box"]}>
                    <div className={classes.image}>
                    <img src="" alt="" />
                    </div>
                    <div className={classes.text}>
                    <span>Download On The </span>
                    <h4>App Store</h4>
                    </div>
                </div>
                </div>
            </a>
            </div>
            <div className={classes["links-box"]}>
            <h3>About Us</h3>
            <ul>
                <li>Careers</li>
                <li>Our Store</li>
                <li>Our Cares</li>
                <li>Team & Conditions</li>
                <li>privacy Policy </li>
            </ul>
            </div>
            <div className={classes["links-box"]}>
            <h3>Customer Care</h3>
            <ul>
                <li>Careers</li>
                <li>Our Store</li>
                <li>Our Cares</li>
                <li>Team & Conditions</li>
                <li>privacy Policy </li>
            </ul>
            </div>
        </div>
    </div>
  );
}

export default Footer;
