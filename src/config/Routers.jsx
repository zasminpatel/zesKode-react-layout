import React, { Component, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";


import LoginLayoutRoute from "component/layouts/loginlayout/LoginLayout";
import FrontLayoutRoute from "component/layouts/frontlayout/FrontLayout";
import AdminLayoutRoute from "component/layouts/adminlayout/AdminLayout";

import Login from "pages/Login";
import Register from "pages/Register";
import Home from "pages/Home";
import About from "pages/About";
import NoFound from "pages/NoFound";
import { history } from './history';

const Dashboard = lazy(() => import("pages/admin/Dashboard"));
const Setting = lazy(() => import("pages/admin/Setting"));
const Profile = lazy(() => import("pages/admin/Profile"));

const AuthRouter = ({ component: Component, roles, isLoggedIn, ...rest }) => {
	return (
		<Route {...rest} render={props => {
			if (!isLoggedIn) {
				return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
			}
			return <Component {...props} />
		}} />
	);
}
class Routers extends Component {
  render() {
	  const {isLoggedIn} = this.props.login;
	  return (
		  <Router history={history}>
			  <Suspense fallback={<div>Loading...</div>}>
				  <Switch>
					  <Route path='/admin'>
						  <AdminLayoutRoute>
							  <Switch>
								  <Route exact path="/admin">
									  <Redirect to="/admin/dashboard" />
								  </Route>
								  
								  <AuthRouter isLoggedIn={isLoggedIn} path='/admin/dashboard' component={Dashboard} />
								  <AuthRouter isLoggedIn={isLoggedIn} path='/admin/setting' component={Setting} />
								  <AuthRouter isLoggedIn={isLoggedIn} path='/admin/Profile' component={Profile} />
								  <AuthRouter isLoggedIn={isLoggedIn} path='/admin/Profile/1' component={Profile} />
								  <AuthRouter isLoggedIn={isLoggedIn} path="/admin/404" component={NoFound} />
								  
								  <Route path="/admin/*">
									  <Redirect to="/admin/404" />
								  </Route>
							  </Switch>
						  </AdminLayoutRoute>
					  </Route>
           
			 
				 
			 
			
			
					  <LoginLayoutRoute path="/login" component={Login} />
					  <LoginLayoutRoute path="/register" component={Register} />
			
					  <FrontLayoutRoute exact path="/" component={Home} />
					  <FrontLayoutRoute path="/about" component={About} />
					  <Route path="/404" component={NoFound} />
					  <Route path="*">
						  <Redirect to="/404" />
					  </Route>
				  </Switch>
			  </Suspense>
		  </Router>
	  );
  }
}
const mapstatetoprop = (state) => {
	return {login: state.login};
}
export default connect(mapstatetoprop,null)(Routers);
