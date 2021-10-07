import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="navbar navbar-expand navbar-dark bg-dark">
			<div className="container-fluid">
				<Link to={"/"} className="navbar-brand">
					zesKode
				</Link>
				<div className="collapse navbar-collapse" id="navbarText">
					<ul className="navbar-nav me-auto mb-lg-0">
						
					</ul>
					<div className=" ">
						<ul className="navbar-nav me-auto">
							 
							<li className="nav-item">
								<NavLink to={"/login"} className="nav-link" activeClassName="active">
									Login
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink to={"/register"} className="nav-link" activeClassName="active">
									Register
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}
export default NavBar;