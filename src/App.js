import React from "react";
import { withRouter } from "react-router-dom";
import Routes from "./configs/routes/Routes";

function App() {
  const childProps = {
    isAuthenticated: true,
    userHasAuthenticated: false
  };

  return <Routes childProps={childProps} />;
}

export default withRouter(App);
