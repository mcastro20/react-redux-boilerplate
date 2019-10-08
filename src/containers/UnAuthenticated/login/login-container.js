// react imports
import React, { useState, useEffect } from "react";
// components
import LoginView from "./login-view";
// libraries
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
// redux component
import * as actionTypes from "../../../redux/session/session-types";
// utils
import { LOGIN_URL } from "../../../configs/api/session/session-endpoint";

const LoginContainer = () => {
  const content = useSelector(state => state);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

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

  return <LoginView login={_login} content={content.session} />;
};

export default LoginContainer;
