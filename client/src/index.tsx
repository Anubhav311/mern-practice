import React from "react";
import { App } from "./App";
// import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./global.css";

// const container = document.getElementById('root')
const root = createRoot(document.getElementById("root"));
// console.log(container)
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
