import { Route } from "@tanstack/react-location";
import Login from "~/pages/UnAuthenticated/Login";
import SelectOrganization from "~/pages/UnAuthenticated/SelectOrganization";

const unAuthenticatedRoutes: Route[] = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/organization",
    element: <SelectOrganization />,
  },
];

export default unAuthenticatedRoutes;
