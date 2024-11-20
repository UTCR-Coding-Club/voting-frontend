import { createBrowserRouter } from "react-router-dom";

import Landing from "./pages/Landing";
import Signup from "./pages/login/Signup";

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
    path: "*",
    element: <p style={"color: black"}>404 Error - Nothing here...</p>,
  },
]);

export default router;
