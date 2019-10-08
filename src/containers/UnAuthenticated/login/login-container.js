// react imports
import React, { useState, useEffect, useReducer } from "react";
// libraries
import axios from "axios";
// components
import LoginView from "./login-view";
// redux component
import * as actionTypes from "../../../redux/session/session-types";
import sessionReducer from "../../../redux/session/session-reducers";
// utils
import { LOGIN_URL } from "../../../configs/api/session/session-endpoint";

const LoginContainer = () => {
  // set initial local state
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  // initial session state
  const initialSession = {
    sessionToken: null
  };

  const [session, dispatch] = useReducer(sessionReducer, initialSession);

  const _login = () => {
    axios.post(LOGIN_URL, { ...userData }).then(response => {
      dispatch({
        type: actionTypes.LOGIN,
        sessionToken: response.data.token
      });
    });
  };

  useEffect(() => {
    setUserData({
      email: "eve.holt@reqres.in",
      password: "cityslicka"
    });
  }, []);

  return <LoginView login={_login} content={session} />;
};

export default LoginContainer;
