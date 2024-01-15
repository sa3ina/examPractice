import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarIcon from "@mui/icons-material/Star";
import React, { useEffect, useState } from "react";
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/products").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  const found = data.find((elem) => elem.id == id);
  console.log(found);
  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{ margin: "20px", boxShadow: "none", display: "flex" }}
    >
      {" "}
      <CardMedia
        component="img"
        style={{ width: "500px" }}
        image={found?.imgSrc}
        alt="Paella dish"
      />
      <CardContent style={{ textAlign: "center" }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {found?.name}
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
            <FavoriteIcon style={{ color: "#F24442" }} /> <p>29</p>
          </div>
        </div>{" "}
        <Typography
          style={{
            fontSize: "14px",
            color: "gray",
            marginBottom: "20px",
          }}
        >
          {found?.description}
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
            CART
          </button>
          <button
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "7px 1px",
              border: "1px solid black",
            }}
          >
            VIEW
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Detail;
