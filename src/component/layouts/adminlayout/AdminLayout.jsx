import React, { Component } from "react";
import { Route } from "react-router-dom";
import NavBar  from "./NavBar";
import SideBar from "./SideBar";
const AdminLayout = ({ children }) => <>{children}</>;

const AdminLayoutRoute = ({children}) => {
	return(
		<>
			<NavBar />
			{children}
		</>
	);
}
{/* 
const AdminLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <AdminLayout>
          <NavBar />
          <Component {...matchProps} />
        </AdminLayout>
      )}
    />
  );
};
*/}

export default AdminLayoutRoute;
