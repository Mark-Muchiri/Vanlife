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

/**
 * Challenge:
 * 1. Add a "Host" link to the Navbar that takes you to the "/host" path
 * 2. Create the following components in the pages/Host folder:
 *    a. Dashboard ("/host")
 *    b. Income ("/host/income")
 *    c. Reviews ("/host/reviews")
 *    These components can just have an h1 for now that says, e.g.
 *    "Host Dashboard here".
 * 3. Set up routes for each of these pages in the Routes below. FOR NOW,
 *    don't worry about nesting anything, you can just put them on the same
 *    level as the "/vans", etc. routes below.
 */

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
				element: <Dashboard />,
				children: [
					{ path: "/host/income", element: <Income /> },
					{ path: "/host/reviews", element: <Reviews /> },
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
