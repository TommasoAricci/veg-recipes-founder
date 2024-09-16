import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./components/App";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FullRecipe from "./components/FullRecipe";
import Random from "./components/Random";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter([
    {
        path: "/",
        element: <About />,
    },
    {
        path: "/recipes",
        element: <App />,
    },
    {
        path: "/recipe/:id",
        element: <FullRecipe />,
    },
    {
        path: "/random",
        element: <Random />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HelmetProvider>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </HelmetProvider>
);
