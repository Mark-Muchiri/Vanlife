// Page Render imports
import About from './pages/About/About.jsx';
import Home from './pages/Home/Home.jsx';
import Vans from './pages/Vans/Vans.jsx';
import './server.js';
// react-router-dom abstractions
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

/**
* Challenge: Create the Vans list page, Route, and Link
* 
* 1. Create a Vans component in the "pages" directory. For now,
*    just render <h1>Vans page goes here 🚐</h1>
* 2. Create a Route for the Vans page on the /vans route
* 3. Add a Link in the nav bar to the Vans route
*/

function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/vans',
      element: <Vans />
    }
  ]);

  return (
    <RouterProvider
      router={router}
    />
  );
}
export default AppRoutes;