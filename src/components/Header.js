import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import "../App.css";
import LoginSignup from "./login/Login";
import { useSelector, useDispatch } from "react-redux";
import { SignedOut } from "../store/action";
import Grid from "@material-ui/core/Grid";
import { GiShoppingBag } from "react-icons/gi";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    backgroundColor: "black",
  },
  link: {
    margin: "5%",
  },
  logo: {
    marginTop: "1%",
  },
}));
function Header() {
  const classes = useStyles();
  const state = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(state);
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(SignedOut());
  };
  return (
    <Grid container className={classes.container}>
      <Grid item md={3}>
        <Link to="/">
          <GiShoppingBag size={45} color="#2F4F4F" />
          <span className={classes.logo}> STORE</span>
        </Link>
      </Grid>
      <Grid item md={4} style={{ marginTop: "1.5%" }}>
        <Link
          to="#"
          onClick={() =>
            (window.location = `http://localhost:3000/products/category`)
          }
        >
          <span>PRODUCTS</span>
        </Link>
      </Grid>
      <Grid item md={5}>
        {state.email ? (
          <Link to="#" onClick={handleLogout} className={classes.link}>
            Logout
          </Link>
        ) : (
          <Link to="#" className={classes.link}>
            <LoginSignup />
          </Link>
        )}
      </Grid>
    </Grid>
  );
}

export default Header;
