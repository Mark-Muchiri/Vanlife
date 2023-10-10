// Page Render imports
import About from './pages/About/About.jsx';
import Home from './pages/Home/Home.jsx';
import VanDetail from './pages/VanDetail/VanDetail.jsx';
import Vans from './pages/Vans/Vans.jsx';
import './server.js';
// react-router-dom abstractions
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function AppRoutes() {
  const router = createBrowserRouter([
    { path: '/', element: <Home />, },
    { path: 'about', element: <About /> },
    { path: 'vans', element: <Vans />, },
    { path: 'vans/:id', element: <VanDetail /> }
  ]);

return (
  <>
    <RouterProvider
      router={router}
    />
  </>
);
}
export default AppRoutes;