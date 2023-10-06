import './App.css';
// Page Render imports
import About from './About';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

function AppRoutes() {
  /**
 * Challenge:
 * 1. Create an "About" component (just render another h1 that says
 *    "About page" or something more interesting of your choosing).
 * 2. Create a new Route to render the About component when the path
 *    is /about
 */

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
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