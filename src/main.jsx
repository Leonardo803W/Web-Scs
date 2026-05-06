import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // deve essere qui! prima dei style personalizzati altrimenti li schiaccia
import './style/styleComponents.css';
import './style/styleGlobal.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);