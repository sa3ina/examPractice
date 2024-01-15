import React from "react";

const Section = () => {
  return (
    <div style={{ height: "400px" }} className="section">
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "100px",
        }}
      >
        <p style={{ fontSize: "30px" }}>Get notified on each updates.</p>
        <div>
          <input
            type="text"
            style={{
              backgroundColor: "transparent",
              color: "white",
              padding: "10px",
              border: "1px solid white",
            }}
            placeholder="Enter your email adress"
          />
          <button
            style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid white",
              padding: "10px",
            }}
          >
            SUBSCRIBE
          </button>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          commodi veniam doloremque ducimus tempora.
        </p>
      </div>
    </div>
  );
};

export default Section;
