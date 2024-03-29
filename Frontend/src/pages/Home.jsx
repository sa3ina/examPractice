import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import Hero from "./Hero";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import Section from "./Section";
import Section2 from "./Section2";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../redux/slices/Slice";
import { addtoBasket } from "../redux/slices/Slice";
import { wishlistHandle } from "../redux/slices/Slice";
import { Helmet } from "react-helmet";
import Blog from "./Blog";
const Home = () => {
  const dispatch = useDispatch();
  const { data, loading, error, basket, wishlist } = useSelector(
    (state) => state.posts
  );
  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);
  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        ...
      </div>
      <Hero />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "100px",
        }}
      >
        {" "}
        <p>POPULAR PRODUCTS</p>
        <h1>Our Products</h1>
        <p style={{ marginBottom: "80px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
          consequatur laboriosam ipsam.
        </p>
        <Grid container spacing={2}>
          {data.map((elem, i) => {
            return (
              <Grid xl={4} md={6} xs={12}>
                {" "}
                <Card
                  sx={{ minWidth: 275 }}
                  style={{ margin: "20px", boxShadow: "none" }}
                >
                  {" "}
                  <CardMedia
                    component="img"
                    width="100%"
                    image={elem.imgSrc}
                    alt="Paella dish"
                  />
                  <CardContent style={{ textAlign: "center" }}>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {elem.name}
                    </Typography>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <StarIcon style={{ color: "#F89D13" }} /> <p>5.0</p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        <button
                          className="heart"
                          onClick={() => dispatch(wishlistHandle(elem))}
                        >
                          {wishlist.find((wish) => wish.id == elem.id) ? (
                            <FavoriteIcon style={{ color: "#F24442" }} />
                          ) : (
                            <FavoriteBorderIcon style={{ color: "#F24442" }} />
                          )}
                        </button>
                        <p>29</p>
                      </div>
                    </div>{" "}
                    <Typography
                      style={{
                        fontSize: "14px",
                        color: "gray",
                        marginBottom: "20px",
                      }}
                    >
                      {elem.description}
                    </Typography>
                    <div>
                      <button
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          padding: "7px 17px",
                          border: "1px solid black",
                          marginRight: "10px",
                          cursor: "pointer",
                        }}
                        onClick={() => dispatch(addtoBasket(elem))}
                      >
                        CART
                      </button>
                      <Link to={`/${elem.id}`}>
                        <button
                          style={{
                            backgroundColor: "white",
                            color: "black",
                            padding: "7px 1px",
                            border: "1px solid black",
                            cursor: "pointer",
                          }}
                        >
                          VIEW
                        </button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Section />
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // width: "500px",
        }}
      >
        <p>AWESOME PRODUCTS</p>
        <h1>Featured Products</h1>
        <p style={{ marginBottom: "80px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
          consequatur laboriosam ipsam.
        </p>
      </Container>
      <Container>
        <Card
          sx={{
            minWidth: 275,
            display: { xl: "flex", md: "block", xs: "block", sm: "block" },
          }}
          style={{
            margin: "20px",
            boxShadow: "none",

            // border: "1px solid black",
          }}
        >
          {" "}
          <CardMedia
            component="img"
            style={{ width: "500px", padding: "30px" }}
            image="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
            alt="Paella dish"
          />
          <CardContent style={{ textAlign: "left" }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              style={{
                marginBottom: "20px",
                marginTop: "70px",
                fontSize: "30px",
                fontWeight: "700",
                color: "black",
              }}
            >
              About This Product
            </Typography>
            <p style={{ color: "grey" }}>
              Et tempora id nostrum saepe amet doloribus deserunt totam officiis
              cupiditate asperiores quasi accusantium voluptatum dolorem quae
              sapiente voluptatem ratione odio iure blanditiis earum fuga
              molestiae alias dicta perferendis inventore!
            </p>
            <p style={{ color: "grey" }} s>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              soluta assumenda sed optio, error at?
            </p>
            <p style={{ fontWeight: "1000" }}>Price:</p>
            <p>$269.00 $69.00</p>
            <Typography
              style={{
                fontSize: "14px",
                color: "gray",
                marginBottom: "20px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </Typography>
            <div>
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "7px 17px",
                  border: "1px solid black",
                  marginRight: "10px",
                }}
              >
                VIEW DETAILS
              </button>
              <button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "7px 1px",
                  border: "1px solid black",
                }}
              >
                ADD TO CART
              </button>
            </div>
          </CardContent>
        </Card>
      </Container>
      <Container>
        <Card
          sx={{
            minWidth: 275,
            display: { xl: "flex", md: "block", xs: "block", sm: "block" },
          }}
          style={{
            margin: "20px",
            boxShadow: "none",
          }}
        >
          {" "}
          <CardContent style={{ textAlign: "left" }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
              style={{
                marginBottom: "20px",
                marginTop: "70px",
                fontSize: "30px",
                fontWeight: "700",
                color: "black",
              }}
            >
              About This Product
            </Typography>
            <p style={{ color: "grey" }}>
              Et tempora id nostrum saepe amet doloribus deserunt totam officiis
              cupiditate asperiores quasi accusantium voluptatum dolorem quae
              sapiente voluptatem ratione odio iure blanditiis earum fuga
              molestiae alias dicta perferendis inventore!
            </p>
            <p style={{ color: "grey" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              soluta assumenda sed optio, error at?
            </p>
            <p style={{ fontWeight: "1000" }}>Price:</p>
            <p>$269.00 $69.00</p>
            <Typography
              style={{
                fontSize: "14px",
                color: "gray",
                marginBottom: "20px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </Typography>
            <div>
              <button
                style={{
                  backgroundColor: "black",
                  color: "white",
                  padding: "7px 17px",
                  border: "1px solid black",
                  marginRight: "10px",
                }}
              >
                VIEW DETAILS
              </button>
              <button
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "7px 1px",
                  border: "1px solid black",
                }}
              >
                ADD TO CART
              </button>
            </div>
          </CardContent>
          <CardMedia
            component="img"
            style={{ width: "500px", padding: "30px" }}
            image="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg"
            alt="Paella dish"
          />
        </Card>
      </Container>
      <Blog />
    </>
  );
};

export default Home;
