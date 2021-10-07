import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "actions/login";

const NavBar = () => {
	const { isLoggedIn, user } = useSelector(state => state.login);
	const dispatch = useDispatch();
	const logOut = () => {
		dispatch(logout());
	};
	return (
		<nav className="navbar navbar-expand navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
			<div className="container-fluid">
				<Link to={"/"} className="navbar-brand">
					zesKode - Admin
				</Link>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav me-auto mb-lg-0">
						<li className="nav-item">
							<NavLink exact to={"/admin/dashboard"} className="nav-link" activeClassName="active">
								Dashboard
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={"/admin/setting"} className="nav-link" activeClassName="active">
								setting
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={"/admin/profile"} className="nav-link" activeClassName="active">
								profile
							</NavLink>
						</li>
					</ul>
					<div className=" ">
						<ul className="navbar-nav me-auto">
							{(isLoggedIn === true) ? (
								<>
									<li className="nav-item">
										<a className="nav-link">{"Welcome " + user.username}</a>
									</li>
									<li className="nav-item">
										<NavLink to={"/login"} className="nav-link" activeClassName="active" onClick={logOut}>
											Logout
										</NavLink>
									</li>
									
								</>
							) : null}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
export default NavBar;