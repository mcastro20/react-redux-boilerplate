import React, { useState } from "react";
import LoginView from "./login-view";

const LoginContainer = () => {
  const [greeting, setGreeting] = useState("Hello Function Component!");

  return <LoginView greeting={greeting} />;
};

export default LoginContainer;
