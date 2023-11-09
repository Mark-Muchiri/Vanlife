// Import necessary components and modules
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
// Import server file
import "./server.js";

// Import necessary page components
const Vans = lazy(() => import("./pages/Vans/Vans.jsx"));
// import Vans from "./pages/Vans/Vans.jsx";
import { loader as vansLoader } from "./pages/Vans/LoaderData.js";
import { loader as vanhostLoader } from "./pages/Host/Vans/Details/LoaderData.js";
import Error from "./components/Error/Error.jsx";
// import Loading from "./components/Loading.jsx";
const Loading = lazy(() => import("./components/Loader/Loading.jsx"));
const Layout = lazy(() => import("./components/Layout.jsx"));
const About = lazy(() => import("./pages/About/About.jsx"));
const Home = lazy(() => import("./pages/Home/Home.jsx"));
const VanDetail = lazy(() => import("./pages/VanDetail/VanDetail.jsx"));
const Dashboard = lazy(() => import("./pages/Host/Dashboard.jsx"));
const Income = lazy(() => import("./pages/Host/Income.jsx"));
const Reviews = lazy(() => import("./pages/Host/Reviews.jsx"));
const HostLayout = lazy(() => import("./pages/Host/HostLayout/HostLayout.jsx"));
const HostVans = lazy(() => import("./pages/Host/Vans/HostVans.jsx"));
const Four0four = lazy(() => import("./pages/404/404.jsx"));
const Login = lazy(() => import("./pages/Login/Login.jsx"));
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

// Create a router using createBrowserRouter
const router = createBrowserRouter([
	{
		// Use Layout component as the top-level wrapper
		element: <Layout />,
		children: [
			{ path: "/", element: <Home /> },
			{ path: "about", element: <About /> },
			{ path: "/login", element: <Login /> },
			{ path: "*", element: <Four0four /> },
			/** NOTE: Nested routes
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
						loader: vansLoader,
					},
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
					{ path: "reviews", element: <Reviews /> },
					{
						path: "vans",
						element: <HostVans />,
						loader: vanhostLoader,
					},
					{
						path: "vans/:id",
						element: <HostVansDetail />,
						loader: vanhostLoader,
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
