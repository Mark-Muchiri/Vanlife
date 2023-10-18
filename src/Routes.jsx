// Import necessary components and modules
import {
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import { lazy, Suspense } from "react";
// Import server file
import "./server.js";

// Import necessary page components
const Loading = lazy(() => import("./components/Loading.jsx"));
// import Loading from "./components/Loading.jsx";
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
const HostDetails = lazy(() =>
	import("./pages/Host/Vans/Details/HostDetails/HostDetails.jsx")
);
const Pricing = lazy(() =>
	import("./pages/Host/Vans/Details/Pricing/Pricing.jsx")
);
const Photos = lazy(() =>
	import("./pages/Host/Vans/Details/Photos/Photos.jsx")
);

/**
 * Challenge: Add the routes necessary so we can access
 * /host/vans/:id/pricing and /host/vans/:id/photos.
 *
 * Add stubbed-out components in separate files for
 * these routes (e.g. <h2>Pricing view here</h2>). I already
 * made the `HostVanInfo.jsx`, `HostVanPricing.jsx` and
 * `HostVanPhotos.jsx` files for you, but they're empty.
 *
 * Don't forget: you'll need to use a special tool from
 * React Router so we can keep the top info (and
 * eventually the navbar we build) on the page while going
 * from nested route to nested route. This will require some
 * slight changes to HostVanDetail.jsx
 *
 * Since we don't have the navbar yet, you can test them
 * by manually navigating to e.g. /host/vans/1/pricing.
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
					{ path: "reviews", element: <Reviews /> },
					{
						path: "vans/:id",
						element: <HostVansDetail />,
						children: [
							{ path: "", element: <HostDetails /> },
							{ path: "pricing", element: <Pricing /> },
							{ path: "photos", element: <Photos /> },
						],
					},
				],
			},
		],
	},
]);

// Define the Routes component
function AppRoutes() {
	// Provide the router to the RouterProvider
	return (
		<Suspense fallback={<Loading />}>
			<RouterProvider router={router} />
		</Suspense>
	);
}
export default AppRoutes;
