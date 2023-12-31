// Import necessary components and modules
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
// Import server file
import "@/server.js";

// Import functions necessary page components
import { requireAuth } from "./utils.js";
import { vansLoader, detailsLoader } from "@pages/Vans/LoaderData.js";
import {
	hostVansLoader,
	hostVansDetailLoader,
} from "@pages/Host/Vans/Details/hostVansLoader.js";
import { loginAction, loginLoader } from "@pages/Login/loginAction.js";
import Error from "@components/Error/Error.jsx";
import { Dashloader } from "./pages/Host/Dashboard.jsx";
// lazy loaded components
const Vans = lazy(() => import("@pages/Vans/Vans.jsx"));
const Loading = lazy(() => import("@components/Loader/Loading.jsx"));
const Layout = lazy(() => import("@components/Layout.jsx"));
const About = lazy(() => import("@pages/About/About.jsx"));
const Home = lazy(() => import("@pages/Home/Home.jsx"));
const VanDetail = lazy(() => import("@pages/VanDetail/VanDetail.jsx"));
const Dashboard = lazy(() => import("@pages/Host/Dashboard.jsx"));
const Income = lazy(() => import("@pages/Host/Income.jsx"));
const Reviews = lazy(() => import("@pages/Host/Reviews.jsx"));
const HostLayout = lazy(() => import("@pages/Host/HostLayout/HostLayout.jsx"));
const HostVans = lazy(() => import("@pages/Host/Vans/HostVans.jsx"));
const Four0four = lazy(() => import("@pages/404/404.jsx"));
const Login = lazy(() => import("@pages/Login/Login.jsx"));
const HostVansDetail = lazy(() =>
	import("@pages/Host/Vans/Details/HostVansLayout.jsx")
);
const HostDetails = lazy(() =>
	import("@pages/Host/Vans/Details/HostDetails/HostDetails.jsx")
);
const Pricing = lazy(() =>
	import("@pages/Host/Vans/Details/Pricing/Pricing.jsx")
);
const Photos = lazy(() => import("@pages/Host/Vans/Details/Photos/Photos.jsx"));

// Create a router using createBrowserRouter
const router = createBrowserRouter([
	{
		// Use Layout component as the top-level wrapper
		element: <Layout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "about", element: <About /> },
			{
				path: "/login",
				element: <Login />,
				action: loginAction,
				loader: loginLoader,
			},
			{ path: "*", element: <Four0four /> },
			/** Nested routes
			 * If there's no component shared,
				 there's no need for nesting.
			 * I've nested vans for practice sake
			 */
			{
				path: "vans",
				children: [
					// indexed route
					{
						path: "",
						element: <Vans />,
						errorElement: <Error />,
						loader: vansLoader,
					},
					{
						path: ":id",
						element: <VanDetail />,
						loader: detailsLoader,
					},
				],
			},
			{
				path: "host",
				element: <HostLayout />,
				children: [
					// Changed path to an empty string for Dashboard
					// This makes it an indexed route
					{
						path: "",
						element: <Dashboard />,
						// "react-router-dom": "^6.16.0",
						loader: Dashloader,
					},
					{
						path: "income",
						element: <Income />,
						loader: async ({ request }) => await requireAuth(request),
					},
					{
						path: "reviews",
						element: <Reviews />,
						loader: async ({ request }) => await requireAuth(request),
					},
					{
						path: "vans",
						element: <HostVans />,
						loader: hostVansLoader,
					},
					{
						path: "vans/:id",
						element: <HostVansDetail />,
						loader: hostVansDetailLoader,
						children: [
							{
								path: "",
								element: <HostDetails />,
								loader: async ({ request }) => await requireAuth(request),
							},
							{
								path: "pricing",
								element: <Pricing />,
								loader: async ({ request }) => await requireAuth(request),
							},
							{
								path: "photos",
								element: <Photos />,
								loader: async ({ request }) => await requireAuth(request),
							},
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
