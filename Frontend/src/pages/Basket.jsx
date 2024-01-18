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
import { decrement } from "../redux/slices/Slice";
const Basket = () => {
  const dispatch = useDispatch();
  const { data, loading, error, basket } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchUserData());
    console.log(data);
  }, [dispatch]);
  console.log("basket", basket);
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "100px",
      }}
    >
      <p className="basket">Basket</p>
      <Grid container spacing={2}>
        {basket &&
          basket.map((elem, i) => {
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
                      ></div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      ></div>
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
                    <Typography
                      style={{
                        fontSize: "14px",
                        color: "gray",
                        marginBottom: "20px",
                      }}
                    >
                      quantity: {elem.quantity}
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
                        onClick={() => dispatch(increment(elem))}
                      >
                        increment
                      </button>
                      <button
                        style={{
                          backgroundColor: "white",
                          color: "black",
                          padding: "7px 1px",
                          border: "1px solid black",
                        }}
                        onClick={() => dispatch(decrement(elem))}
                      >
                        decrement
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default Basket;
