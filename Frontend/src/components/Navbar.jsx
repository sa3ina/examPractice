import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// const pages = ["Products", "Pricing", "Blog"];
import { Link } from "react-router-dom";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      style={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl" position="static">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <ul
            style={{
              display: "flex",
              textDecoration: "none",
              listStyleType: "none",
              color: "white",
              gap: "10px",
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

          <p>(+1) 234 5678 9101 shop@yourdomain.com</p>
        </div>

        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 1000,
              fontSize: "30px",
              color: "black",
              textDecoration: "none",
            }}
          >
            SELLING
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <Link to="/products">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Products</Typography>
                </MenuItem>
              </Link>
              <Link to="/about">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About Us</Typography>
                </MenuItem>
              </Link>

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"> Special</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"> Blog</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"> Contact</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {/* {pages.map((page) => ( */}
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">Home</Typography>
            </MenuItem>
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">Products</Typography>
              </MenuItem>
            </Link>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">About Us</Typography>
              </MenuItem>
            </Link>
            <Link
              to="/basket"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"> Basket</Typography>
              </MenuItem>
            </Link>
            <Link
              to="/special"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"> Special</Typography>
              </MenuItem>
            </Link>

            <Link to="/blog" style={{ textDecoration: "none", color: "black" }}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"> Blog</Typography>
              </MenuItem>
            </Link>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center"> Contact</Typography>
              </MenuItem>
            </Link>
            {/* ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings"></Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              style={{ color: "black" }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* {settings.map((setting) => ( */}
              {/* <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" style={{ color: "black" }}>
                  Slas
                </Typography>
              </MenuItem> */}
              {/* ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
