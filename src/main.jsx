import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./component/home";
import Root from "./routes/root";
import Error from "./error";
import Contacts from "./routes/contacts";

const router = createBrowserRouter([
  {
    path: "/root",
    element: <Root/>,
    errorElement:<Error/>,
  },

  {
    path:"/contacts",
    element: <Contacts/>,
 }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
