import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: {
      margin: 8,
      width: "calc(50% - 16px)",
    },
    [theme.breakpoints.up("md")]: {
      margin: 16,
      width: "calc(33.3333% - 32px)",
    },
  },
  content: {
    display: "flex",
    padding: "16 8",
    textAlign: "left",
    "&:last-child": {
      paddingBottom: 16,
    },
  },
  icon: {
    marginRight: 0,
    marginLeft: "auto",
  },
  media: {
    height: 0,
    paddingTop: "100%",
  },
  price: {
    color: theme.palette.secondary.dark,
    fontSize: 16,
  },
  productName: {
    boxOrient: "vertical",
    display: "-webkit-box",
    fontSize: 14,
    lineHeight: "18px",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      height: 36,
      lineClamp: 2,
    },
    [theme.breakpoints.up("md")]: {
      height: 18,
      lineClamp: 1,
    },
  },
}));
const ProductCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="/static/images/cards/1.jpg"
        // component="img"
      ></CardMedia>
    </Card>
  );
};

export default ProductCard;
