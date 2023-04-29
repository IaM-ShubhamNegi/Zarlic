import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "../ui-icons/Icons";

import classes from "./Footer.module.css";

export const Footer = () => {
  return (
    <Fragment>
      <footer className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.columnOne}>
            <Link to="/Mainpage">
              <p>Zarlic</p>
            </Link>
          </div>
          <div className={classes.columnTwo}>
            <p className={classes.Head_pera}>ABOUT</p>
            <Link to="/Mainpage">
              <p className={classes.body_pera}>Home</p>
            </Link>
            <Link to="/OurStory">
              <p className={classes.body_pera}>Our Story</p>
            </Link>
            <Link to="/Menupage">
              <p className={classes.body_pera}>Our Menu</p>
            </Link>
            <Link to="/Location">
              <p className={classes.body_pera}>Location</p>
            </Link>
          </div>
          <div className={classes.columnThree}>
            <p className={classes.Head_pera}>INFO</p>
            <Link to="/Careers">
              <p className={classes.body_pera}>Careers</p>
            </Link>
            <Link to="/FAQ">
              <p className={classes.body_pera}>FAQ</p>
            </Link>
            <Link to="/Feedback">
              {" "}
              <p className={classes.body_pera}>Feedback</p>
            </Link>
          </div>
          <div className={classes.columnFour}>
            <p className={classes.Head_pera}>Follow Us</p>
            <div className={classes.icons}>
              <Facebook />
              <Twitter />
              <Instagram />
              <Linkedin/>
            </div>
          </div>
        </div>
        <div className={classes.copyright}>
          <p>@ 2023 Zarlic</p>
        </div>
      </footer>
    </Fragment>
  );
};
