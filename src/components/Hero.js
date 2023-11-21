import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ButtonShop from "./Button";
import banner from "../images/banner.jpg";

const useStyles = makeStyles((theme) => ({
  imgStyles: {
    textAlign: "right",
  },
  headingStyles: {
    marginTop: "10%",
    textAlign: "left",
    paddingLeft: "5%",
  },
  paraStyles: {
    margin: "10px auto",
    textAlign: "left",
    lineHeight: 1.5,
    fontSize: "1.1em",
  },
}));

function Hero({ hero }) {
  const classes = useStyles();

  return (
    <Grid container>
      <img src={banner} width="100%" />
    </Grid>
  );
}

export default Hero;
