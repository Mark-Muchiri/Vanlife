import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./server";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Vans from "./pages/Vans/Vans.jsx";
import VanDetail from "./pages/VanDetail/VanDetail.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Footer from "./components/Footer/Footer.jsx";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/vans' element={<Vans />} />
				<Route path='/vans/:id' element={<VanDetail />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
export default AppRoutes;
