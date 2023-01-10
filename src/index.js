import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Sass
import "./sass/index.scss";
import RootLayout from "./pages/RootLayout";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [{ index: true, element: <Dashboard /> }],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>
);
