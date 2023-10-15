// Import necessary components and modules
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Import server file
import "./server.js";

// Import necessary page components
import Layout from "./components/Layout.jsx";
import About from "./pages/About/About.jsx";
import Home from "./pages/Home/Home.jsx";
import VanDetail from "./pages/VanDetail/VanDetail.jsx";
import Vans from "./pages/Vans/Vans.jsx";
import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income.jsx";
import Reviews from "./pages/Host/Reviews.jsx";
import HostLayout from "./pages/Host/HostLayout.jsx";

// Create a router using createBrowserRouter
const router = createBrowserRouter([
	{
		// Use Layout component as the top-level wrapper
		element: <Layout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "/about", element: <About /> },
			{ path: "/vans", element: <Vans /> },
			{ path: "/vans/:id", element: <VanDetail /> },
			{
				path: "/host",
				element: <HostLayout />,
				children: [
					// Make the path empty for it to be an indexed route
					{ path: "", element: <Dashboard /> },
					{ path: "income", element: <Income /> },
					{ path: "reviews", element: <Reviews /> },
				],
			},
		],
	},
]);

// Define the Routes component
function AppRoutes() {
	// Provide the router to the RouterProvider
	return <RouterProvider router={router} />;
}
export default AppRoutes;
