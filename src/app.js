import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import About from "./components/About";
import Contactus from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import RestoMenu from "./components/RestoMenu";
//import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

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
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <About></About>
          </Suspense>
        ),
      },
      {
        path: "/Contact",
        element: <Contactus></Contactus>,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading......</h1>}>
            <Grocery></Grocery>
          </Suspense>
        ),
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
