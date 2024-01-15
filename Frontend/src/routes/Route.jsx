import UserRoot from "../pages/UserRoot";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Detail from "../pages/Detail";
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
    ],
  },
];
