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

/**
 * Challenge: Make the HostLayout component!
 * The HostLayout should use Links to navigate to the following
 * routes:
 *    * Dashboard ("/host")
 *    * Income ("/host/income")
 *    * Reviews ("/host/reviews")
 * Then replace the parent "/host" route's element below with the
 * new HostLayout component you made.
 *
 * NOTE: The dashboard route/page will be gone for now, but don't fret.
 * We'll be fixing that in the next lesson.
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
				element: <HostLayout />,
				children: [
					{ path: "/host", element: <Dashboard /> },
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
