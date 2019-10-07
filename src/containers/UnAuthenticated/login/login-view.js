import React from "react";
import PropTypes from "prop-types";

import "./login.css";

const LoginView = props => {
  return <div>{props.greeting}</div>;
};

LoginView.propTypes = {};

export default LoginView;
