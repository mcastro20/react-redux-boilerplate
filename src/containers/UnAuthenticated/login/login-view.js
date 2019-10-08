import React from "react";
import "./login.css";

const LoginView = props => {
  const { login, content } = props;

  return (
    <div>
      <h3>Session Token: {content.sessionToken}</h3>
      <button onClick={login}>Login</button>
    </div>
  );
};

export default LoginView;
