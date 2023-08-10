import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contactus from "./components/contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import RestoMenu from "./components/RestoMenu";

const AppLayout = () => (
  <div className="app">
    <HeaderComponent></HeaderComponent>
    <Outlet></Outlet>
  </div>
);

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout></AppLayout>,
    children: [
      {
        path: "/",
        element: <BodyComponent></BodyComponent>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "/Contact",
        element: <Contactus></Contactus>,
      },
      {
        path: "/restaurants/:id",
        element: <RestoMenu></RestoMenu>,
      },
    ],
    errorElement: <Error></Error>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute}></RouterProvider>);
