import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import './style.css'
import App from './App.jsx'

import { Buffer } from 'buffer';
window.Buffer = Buffer;

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HashRouter>
            <App />
        </HashRouter>
    </React.StrictMode>
);