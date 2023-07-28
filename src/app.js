import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
const AppLayout = () => (
  <div className="app">
    <HeaderComponent></HeaderComponent>
    <BodyComponent></BodyComponent>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
