import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './style.css'
import "bootstrap/dist/css/bootstrap.min.css"; // deve essere qui!

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);