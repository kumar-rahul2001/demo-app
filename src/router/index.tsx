import { useRoutes, Navigate } from "react-router-dom";

// Import pages
import Layout from "../themes";
import UserData from "@/pages/User/UsersData";
import ErrorPage from "@/pages/ErrorPage"; // Import the Error Page

function Router() {
  // Super Admin Routes
  const adminRoutes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <UserData />,
        },
        // Add wildcard route for all other paths
        {
          path: "*",
          element: <ErrorPage />, // Render the error page for undefined routes
        },
      ],
    },
  ];

  return useRoutes(adminRoutes);
}

export default Router;
