import { Grid } from "@material-ui/core";
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <Grid container>
        <Grid item sm={12} md={6}>
          <h6>About</h6>
          <p className="text-justify">
            We brings you hundreds of millions of products in over 4 different
            major categories, including consumer electronics and apparel.
          </p>
        </Grid>
        <Grid item xs={6} md={3}>
          <h6>Categories</h6>
          <ul className="footer-links">
            <li>
              <a href="http://scanfcode.com/category/c-language/">Men's Wear</a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/front-end-development/">
                Jewelry
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/back-end-development/">
                Women's Wear
              </a>
            </li>
            <li>
              <a href="http://scanfcode.com/category/java-programming-language/">
                Electronic
              </a>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6} md={3}>
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Contribute</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </Grid>
        <hr />
      </Grid>
      <Grid container className="container">
        <Grid item className="col-xs-12" xs={12}>
          <p className="copyright-text">
            Copyright © 2017 All Rights Reserved by
            <a href="#"> XYZ STORE</a>.
          </p>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
