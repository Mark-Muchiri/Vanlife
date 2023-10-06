import './App.css';
// Page Render imports
import About from './About';
import App from './App.jsx';
// react-router-dom abstractions
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

function AppRoutes() {
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