//La linea de abajo tiene que estar para que entienda JSX
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app";

const container = document.getElementById("App");

const root = ReactDOM.createRoot(container);

root.render(<App />);
