import React from "react";
import { ReactLocation, Router, Outlet } from "@tanstack/react-location";
import { authenticatedRoutes } from "~/routes";
import { AuthenticatedPageContainer } from "~/components/PageContainers";
import { AuthenticatedLocationGenerics } from "~/types/location.types";

const location = new ReactLocation<AuthenticatedLocationGenerics>();

const Authenticated = () => (
  <Router location={location} routes={authenticatedRoutes}>
    <AuthenticatedPageContainer>
      <Outlet />
    </AuthenticatedPageContainer>
    {/* <ReactLocationDevtools /> */}
  </Router>
);

export default Authenticated;
