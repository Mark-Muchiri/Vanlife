// Import necessary components and modules
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import { lazy, Suspense } from "react";
// Import server file
import "./server.js";

// Import necessary page components
import { requireAuth } from "./utils.js";
import { loader as vansLoader } from "./pages/Vans/LoaderData.js";
import { loader as vanhostLoader } from "./pages/Host/Vans/Details/LoaderData.js";
import Error from "./components/Error/Error.jsx";
const Vans = lazy(() => import("./pages/Vans/Vans.jsx"));
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

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route index element={<Home />} />
			<Route path='about' element={<About />} />
			<Route path='login' element={<Login />} />
			<Route
				path='vans'
				element={<Vans />}
				errorElement={<Error />}
				loader={vansLoader}
			/>
			<Route path='vans/:id' element={<VanDetail />} loader={vansLoader} />
			<Route path='host' element={<HostLayout />}>
				<Route
					index
					element={<Dashboard />}
					loader={async () => await requireAuth()}
				/>
				<Route path='income' element={<Income />} />
				<Route path='reviews' element={<Reviews />} />
				<Route path='vans' element={<HostVans />} loader={vanhostLoader} />
				<Route
					path='vans/:id'
					element={<HostVansDetail />}
					loader={vanhostLoader}
				>
					<Route index element={<HostDetails />} />
					<Route path='pricing' element={<Pricing />} />
					<Route path='photos' element={<Photos />} />
				</Route>
			</Route>
			<Route path='*' element={<Four0four />} />
		</Route>
	)
);

function AppRoutes() {
	return (
		<Suspense fallback={<Loading />}>
			<RouterProvider router={router} />
		</Suspense>
	);
}

export default AppRoutes;
