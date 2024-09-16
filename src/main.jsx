import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Prices from "./Prices/Prices.jsx";
import MainApp from "./MainApp.jsx";
import "./css/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainApp></MainApp>
  </React.StrictMode>
);
