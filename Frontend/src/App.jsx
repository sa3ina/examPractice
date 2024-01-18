import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Route";
import "./assets/styles/styles.scss";
const router = createBrowserRouter(routes);
import { createBrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
