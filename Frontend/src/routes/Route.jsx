import UserRoot from "../pages/UserRoot";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Detail from "../pages/Detail";
import AboutUs from "../pages/AboutUs";
import Special from "../pages/Special";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Basket from "../pages/Basket";
export const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/special",
        element: <Special />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
];
