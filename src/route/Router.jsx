import { createBrowserRouter } from "react-router";
import App from "../App";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Services from "../pages/Services";

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
