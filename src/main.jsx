import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // deve essere qui! prima dei style personalizzati altrimenti li schiaccia
import './styleComponents.css';
import './styleGlobal.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);