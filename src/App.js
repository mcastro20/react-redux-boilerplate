import React from "react";
import { withRouter } from "react-router-dom";
import Routes from "./configs/routes/Routes";

const App = () => {
  const childProps = {
    isAuthenticated: false,
    userHasAuthenticated: false
  };

  return <Routes childProps={childProps} />;
};

export default withRouter(App);
