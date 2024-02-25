import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Login from "./component/login";
import System from "./component/system";
import Gallery from "./component/gallery";
import Home from "./component/home";
import Contact from "./component/contact";
import Error from "./error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<Error/>
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
