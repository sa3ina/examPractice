import React from "react";
import { Container } from "@mui/material";
const Section2 = () => {
  return (
    <Container>
      <Container
        sx={{
          gap: "100px",
          display: { xl: "flex", md: "block", xs: "block", sm: "block" },
        }}
      >
        <img
          src="https://preview.colorlib.com/theme/selling/images/about_1.jpg"
          alt=""
          style={{ maxWidth: "700px" }}
        />

        <div style={{ maxWidth: "200px", marginTop: "200px" }}>
          <p>MERCHANT COMPANY</p>
          <h1>ABOUT US</h1>
          <p style={{ color: "grey" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga
            ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum
            inventore, rem maxime, nisi excepturi ipsam libero ratione adipisci
            alias eius vero vel!
          </p>
          <button
            style={{
              backgroundColor: "black",
              padding: "10px",
              color: "white",
            }}
          >
            LEARN MORE
          </button>
        </div>
      </Container>
    </Container>
  );
};

export default Section2;
