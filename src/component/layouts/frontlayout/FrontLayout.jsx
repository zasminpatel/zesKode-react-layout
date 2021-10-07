import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
const Front = ({children}) => <>{children}</>;

const FrontLayout = ({ component: Component, ...rest }) => {
  return (
    <>
		<Route
		  {...rest}
		  render={(matchProps) => (
			<Front>
				<NavBar />
				<Component {...matchProps} />
			</Front>
		  )}
		/>
    </>
  );
};

export default FrontLayout;