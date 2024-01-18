import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
const UserRoot = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default UserRoot;
