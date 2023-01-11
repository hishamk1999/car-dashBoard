import React from "react";
import ReactDOM from "react-dom/client";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
// Sass
import "./sass/index.scss";
import RootLayout from "./pages/RootLayout";
import Dashboard from "./pages/Dashboard";
import Booking from "./pages/Booking";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <Dashboard /> },
			{ path: "booking", element: <Booking /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<RootLayout />
		</RouterProvider>
	</React.StrictMode>
);
