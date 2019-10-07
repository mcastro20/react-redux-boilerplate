import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../../containers/Authenticated/Home/Home";
import Settings from "../../containers/Authenticated/Settings/Settings";
import Login from "../../containers/UnAuthenticated/login";

import NotFound from "../../components/NotFound/NotFound";

// routing component
import AppliedRoute from "../../components/Routing/AppliedRoute";
import AuthenticatedRoute from "../../components/Routing/AuthenticatedRoute";
import UnauthenticatedRoute from "../../components/Routing/UnauthenticatedRoute";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <UnauthenticatedRoute
      path="/login"
      exact
      component={Login}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/settings"
      exact
      component={Settings}
      props={childProps}
    />
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
