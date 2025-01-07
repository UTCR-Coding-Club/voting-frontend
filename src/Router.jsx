import { createBrowserRouter } from "react-router-dom";

import Landing from "./pages/Landing";
import Signup from "./pages/login/Signup";
import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";
import Elections from "./pages/dashboard/admin/sidebarContent/Elections";
import Results from "./pages/dashboard/admin/sidebarContent/Results";
import UserManagement from "./pages/dashboard/admin/sidebarContent/UserManagement";
import VoteHistory from "./pages/dashboard/admin/sidebarContent/VoteHistory";


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
    children: [
       {
         path: "elections",
         element: <Elections />
       },
       {
         path: "user-management",
         element: <UserManagement />
       },
       {
         path: "vote-history",
         element: <VoteHistory />
       },
       {
         path: "results",
         element: <Results />
       }
    ],
  },
  {
    path: "*",
    element: <h1>404 Error - Nothing here...</h1>,
  },
]);

export default router;