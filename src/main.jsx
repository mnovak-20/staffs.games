import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './style.css'
import App from './App.jsx'



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter basename="/">

        <App />
        </BrowserRouter>
    </React.StrictMode>
);