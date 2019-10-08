import React from "react";
import { withRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./configs/routes/routes";
import store from "./store";

const App = () => {
  const childProps = {
    isAuthenticated: false,
    userHasAuthenticated: false
  };

  return (
    <Provider store={store}>
      <Routes childProps={childProps} />
    </Provider>
  );
};

export default withRouter(App);
