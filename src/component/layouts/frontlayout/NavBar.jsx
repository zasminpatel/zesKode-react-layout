import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "actions/login";

const NavBar = () => {
	const { isLoggedIn } = useSelector(state => state.login);
	const dispatch = useDispatch();
	const logOut = () => {
		dispatch(logout());
	};
	return (
		<nav className="navbar navbar-expand navbar-dark bg-dark">
			<div className="container-fluid">
				<Link to={"/"} className="navbar-brand">
					zesKode
				</Link>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav me-auto mb-lg-0">
						<li className="nav-item">
							<NavLink exact to={"/"} className="nav-link" activeClassName="active">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={"/about"} className="nav-link" activeClassName="active">
								About
							</NavLink>
						</li>
					</ul>
					<div className=" ">
						<ul className="navbar-nav me-auto">
							{(isLoggedIn == false) ? (
								<li className="nav-item">
									<NavLink to={"/login"} className="nav-link" activeClassName="active">
										Login
									</NavLink>
								</li>
							) : (
								<>
									<li className="nav-item">
										<NavLink to={"/admin"} className="nav-link" activeClassName="active">
											Admin
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink to={"/login"} className="nav-link" activeClassName="active" onClick={logOut}>
											Logout
										</NavLink>
									</li>
								</>
							)}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
export default NavBar;