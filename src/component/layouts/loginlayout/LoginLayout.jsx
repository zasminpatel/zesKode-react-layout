import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import NavBar from "./NavBar";

const LoginLayout = ({ children }) => <>{children}</>;

const LoginLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <LoginLayout>
			<NavBar />
			<Component {...matchProps} />
        </LoginLayout>
      )}
    />
  );
};

export default LoginLayoutRoute;
