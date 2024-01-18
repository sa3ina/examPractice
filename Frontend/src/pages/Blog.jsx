import React from "react";
import { Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Blog = () => {
  return (
    <div className="blog">
      <div className="container">
        <p>Team</p>
        <p>Leadership</p>
        <Grid container className="gridd">
          <Grid xl={4} xs={12} md={6} sm={6}>
            <img
              src="https://preview.colorlib.com/theme/selling/images/person_2.jpg"
              alt=""
            />
            <p>John Rooster</p>
            <p>CO-FOUNDER, PRESIDENT</p>
            <p>
              Nisi at consequatur unde molestiae quidem provident voluptatum
              deleniti quo iste error eos est praesentium distinctio cupiditate
              tempore suscipit inventore deserunt tenetur.
            </p>{" "}
            <ul
              style={{
                display: "flex",
                textDecoration: "none",
                listStyleType: "none",
                color: "white",
                gap: "10px",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <li
                style={{
                  backgroundColor: "black",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FacebookIcon />
              </li>
              <li
                style={{
                  backgroundColor: "black",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TwitterIcon />
              </li>
              <li
                style={{
                  backgroundColor: "black",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InstagramIcon />
              </li>
              <li
                style={{
                  backgroundColor: "black",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LinkedInIcon />
              </li>
            </ul>
          </Grid>
          <Grid xl={4} xs={12} md={6} sm={6}>
            <img
              src="https://preview.colorlib.com/theme/selling/images/person_3.jpg"
              alt=""
            />
            <p>John Rooster</p>
            <p>CO-FOUNDER, PRESIDENT</p>
            <p>
              Nisi at consequatur unde molestiae quidem provident voluptatum
              deleniti quo iste error eos est praesentium distinctio cupiditate
              tempore suscipit inventore deserunt tenetur.
            </p>{" "}
            <ul
              style={{
                display: "flex",
                textDecoration: "none",
                listStyleType: "none",
                color: "white",
                gap: "10px",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <li
                style={{
                  backgroundColor: "black",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FacebookIcon />
              </li>
              <li
                style={{
                  backgroundColor: "black",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TwitterIcon />
              </li>
              <li
                style={{
                  backgroundColor: "black",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InstagramIcon />
              </li>
              <li
                style={{
                  backgroundColor: "black",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LinkedInIcon />
              </li>
            </ul>
          </Grid>
          <Grid xl={4} xs={12} md={6} sm={6}>
            <img
              src="https://preview.colorlib.com/theme/selling/images/person_4.jpg"
              alt=""
            />
            <p>John Rooster</p>
            <p>CO-FOUNDER, PRESIDENT</p>
            <p>
              Nisi at consequatur unde molestiae quidem provident voluptatum
              deleniti quo iste error eos est praesentium distinctio cupiditate
              tempore suscipit inventore deserunt tenetur.
            </p>{" "}
            <ul
              style={{
                display: "flex",
                textDecoration: "none",
                listStyleType: "none",
                color: "white",
                gap: "10px",
                display: "flex",
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <li
                style={{
                  backgroundColor: "black",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FacebookIcon />
              </li>
              <li
                style={{
                  backgroundColor: "black",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <TwitterIcon />
              </li>
              <li
                style={{
                  backgroundColor: "black",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InstagramIcon />
              </li>
              <li
                style={{
                  backgroundColor: "black",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <LinkedInIcon />
              </li>
            </ul>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Blog;
