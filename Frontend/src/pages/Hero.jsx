import React from "react";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        width: "100%",
        height: "1200px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // position: "relative",
      }}
    >
      <div>
        <h1 style={{ color: "white", fontSize: "60px" }}>Shop With Us</h1>
        <p style={{ color: "white", fontSize: "20px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda ea quo cupiditate facere deleniti fuga officia.
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
          <button
            style={{
              padding: "20px 40px",
              backgroundColor: "transparent",
              border: "1px solid white",
              color: "white",
            }}
          >
            SHOP NOW
          </button>
          <button>CLUB MEMBERSHIP</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
