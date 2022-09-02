import { Route } from "@tanstack/react-location";
import TradeIns from "~/pages/Authenticated/TradeIns";
import { AuthenticatedLocationGenerics } from "~/types/location.types";

const authenticatedRoutes: Route<AuthenticatedLocationGenerics>[] = [
  {
    path: "/",
    element: <TradeIns />,
    searchFilters: [
      // default the search params into this
      (search) => ({
        ...search,
        textQuery: search?.textQuery || "",
        tradeInStatus: search?.tradeInStatus || "All",
      }),
    ],
  },
  {
    path: "device-listings",
    element: <div>dash</div>,
  },
  {
    path: "manage-account",
    element: <div>dash</div>,
  },
];

export default authenticatedRoutes;
