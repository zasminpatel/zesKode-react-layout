import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

export const PrivateRoute = ({ component: Component, roles, ...rest }) => {

  return (
    // <Route {...rest} render={
      // (props) => localStorage.getItem('token') ? (props.location.pathname === '/' ? (<
        // Redirect from="/" to="/home" />) : (<            Component {...props} />
        // )) : (<Redirect to={{ pathname: '/login', state: { from: props.location }, }} />
        // )} />
		
		
		<Route {...rest} render={props => {
			debugger;
			const currentUser = localStorage.getItem('user');//authenticationService.currentUserValue;
			if (!currentUser) {
				// not logged in so redirect to login page with the return url
				return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
			}

			// check if route is restricted by role
			if (roles && roles.indexOf(currentUser.role) === -1) {
				// role not authorised so redirect to home page
				return <Redirect to={{ pathname: '/'}} />
			}

			// authorised so return component
			return <Component {...props} />
		}} />
  );
};
export const FrontRoute = ({ component: Component, ...rest }) => {
	debugger;
  return (
    // <Route {...rest} render={
      // (props) => localStorage.getItem('token') ? (props.location.pathname === '/' ? (<
        // Redirect from="/" to="/home" />) : (<            Component {...props} />
        // )) : (<Redirect to={{ pathname: '/login', state: { from: props.location }, }} />
        // )} />
		
		
		<Route {...rest} render={props => {
			debugger;
			return <Component {...props} />
		}} />
  );
};