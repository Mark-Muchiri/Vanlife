// Import necessary components and modules
import {
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import { lazy, Suspense } from "react";
// Import server file
import "./server.js";

// Import necessary page components
const Layout = lazy(() => import("./components/Layout.jsx"));
const About = lazy(() => import("./pages/About/About.jsx"));
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const VanDetail = lazy(() =>
	import("./pages/VanDetail/VanDetail.jsx")
);
const Vans = lazy(() => import("./pages/Vans/Vans.jsx"));
const Dashboard = lazy(() => import("./pages/Host/Dashboard.jsx"));
const Income = lazy(() => import("./pages/Host/Income.jsx"));
const Reviews = lazy(() => import("./pages/Host/Reviews.jsx"));
const HostLayout = lazy(() =>
	import("./pages/Host/HostLayout/HostLayout.jsx")
);
const HostVans = lazy(() =>
	import("./pages/Host/Vans/HostVans.jsx")
);
const HostVansDetail = lazy(() =>
	import("./pages/Host/Vans/Details/HostVansLayout.jsx")
);

/**
 * Challenge: add the /host/vans and /host/vans/:id routes, as well
 * as the "Vans" link in the Host navbar.
 *
 * For now, just create the stubbed-out version of the pages (i.e.
 * components that just render an <h1>). Don't worry about adding
 * navigation from /host/vans to /host/vans/:id yet - the link to
 * /host/vans is enough for now.
 *
 * When deciding whether or not to use nested routes, keep in mind
 * what will/won't be shared between these two pages. See the Figma
 * design file (or the screenshots) to help guide your choice.
 */

// Create a router using createBrowserRouter
const router = createBrowserRouter([
	{
		// Use Layout component as the top-level wrapper
		element: <Layout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "about", element: <About /> },
			/** NOTE: Nested routes
			 * If there's no component shared,
				 there's no need for nesting.
			 * I've nested vans for practice sake
			 */
			{
				path: "vans",
				children: [
					// indexed route
					{ path: "", element: <Vans /> },
					{ path: ":id", element: <VanDetail /> },
				],
			},
			{
				path: "host",
				element: <HostLayout />,
				children: [
					// Changed path to an empty string for Dashboard
					// This makes it an indexed route
					{ path: "", element: <Dashboard /> },
					{ path: "income", element: <Income /> },
					{ path: "vans", element: <HostVans /> },
					{ path: "vans/:id", element: <HostVansDetail /> },
					{ path: "reviews", element: <Reviews /> },
				],
			},
		],
	},
]);

// Define the Routes component
function AppRoutes() {
	// Provide the router to the RouterProvider
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<RouterProvider router={router} />
		</Suspense>
	);
}
export default AppRoutes;
