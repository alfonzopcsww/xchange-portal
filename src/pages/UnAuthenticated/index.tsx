import { ReactLocation, Router, Outlet } from "@tanstack/react-location";
import { UnAuthenticatedPageContainer } from "~/components/PageContainers";
import { unAuthenticatedRoutes } from "~/routes";

const location = new ReactLocation();

const UnAuthenticated = () => (
  <Router location={location} routes={unAuthenticatedRoutes}>
    <UnAuthenticatedPageContainer>
      <Outlet />
    </UnAuthenticatedPageContainer>
    {/* <ReactLocationDevtools /> */}
  </Router>
);

export default UnAuthenticated;
