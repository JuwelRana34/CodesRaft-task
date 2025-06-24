import { lazy } from "react";
import { createBrowserRouter } from "react-router";
import App from "../App";
const Contact = lazy(()=> import("../pages/Contact"));
const Home = lazy(()=>import("../pages/Home"));
const Services = lazy(()=> import("../pages/Services"));
import NotFound from "../pages/NotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Router;
