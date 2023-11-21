import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Zoom from "react-reveal/Zoom";
import { FaCartPlus } from "react-icons/fa";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    borderRadius: 0,
    margin: 25,
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 26px 70px -12.125px rgba(0,0,0,0.3)",
    },
    height: "480px",
  },
  stylebtn: {
    margin: "auto",
  },
  container: {
    width: "95%",
    margin: "auto",
    justifyContent: "center",
  },
  item: {
    margin: "auto",
    justifyContent: "center",
  },
});

export default function ProductCard({ data }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      {data.map((item, ind) => (
        <Grid item md={4} sm={6} xs={12} className={classes.item}>
          <Zoom>
            <Card className={classes.root}>
              <CardActionArea>
                <img src={item.image} widh="100%" height="350" />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  className={classes.stylebtn}
                >
                  <FaCartPlus size="32" color="#2F4F4F" />
                </Button>
              </CardActions>
            </Card>
          </Zoom>
        </Grid>
      ))}
    </Grid>
  );
}
