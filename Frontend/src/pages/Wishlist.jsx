import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/slices/Slice";
import { addtoBasket } from "../redux/slices/Slice";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { increment } from "../redux/slices/Slice";
import { removeFromBasket } from "../redux/slices/Slice";
import { decrement } from "../redux/slices/Slice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { wishlistHandle } from "../redux/slices/Slice";
import { Helmet } from "react-helmet";

const Wishlist = () => {
  const dispatch = useDispatch();
  const { data, loading, error, basket, wishlist } = useSelector(
    (state) => state.posts
  );
  useEffect(() => {
    dispatch(fetchUserData());
    console.log(data);
  }, [dispatch]);
  console.log("basket", wishlist);
  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Wishlist</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        ...
      </div>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "100px",
          marginTop: "300px",
        }}
      >
        <p className="basket">Wishlist</p>
        <Grid container spacing={2}>
          {wishlist &&
            wishlist.map((elem, i) => {
              return (
                <Grid xl={4} md={6} xs={12}>
                  {" "}
                  <Card
                    sx={{ minWidth: 275 }}
                    style={{ margin: "20px", boxShadow: "none" }}
                  >
                    {" "}
                    <Link to={`/${elem.id}`}>
                      <CardMedia
                        component="img"
                        width="100%"
                        image={elem.imgSrc}
                        alt="Paella dish"
                      />
                    </Link>
                    <CardContent style={{ textAlign: "center" }}>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {elem.name}
                      </Typography>
                      <button
                        className="heart"
                        onClick={() => {
                          dispatch(wishlistHandle(elem));
                        }}
                      >
                        <FavoriteIcon />
                      </button>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
};

export default Wishlist;
