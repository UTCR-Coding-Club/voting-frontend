import { createBrowserRouter } from "react-router-dom";

import Landing from "./pages/Landing";
import Signup from "./pages/login/Signup";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
    index: true,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/admin",
    element: <AdminDashboard />,
    children: [],
  },
  {
    path: "*",
    element: <h1>404 Error - Nothing here...</h1>,
  },
]);

export default router;
