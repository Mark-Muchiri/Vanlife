// Page Render imports
import About from './About/About';
import Home from './Home/Home.jsx';
// react-router-dom abstractions
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

function AppRoutes() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />
    }
  ]);

  return (
    <RouterProvider
      router={router}
    />
  );
}
export default AppRoutes;