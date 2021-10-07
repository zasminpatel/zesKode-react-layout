import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "actions/login";

const SideBar = () => {
	const { isLoggedIn } = useSelector(state => state.login);
	const dispatch = useDispatch();
	const logOut = () => {
		dispatch(logout());
	};
	return (
		<div className="flex-shrink-0 p-3 bg-white" style={{ width: "280px" }}>
			<a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
				{/* <svg className="bi me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
				<span className="fs-5 fw-semibold">Collapsible</span>
			</a>
			<ul className="list-unstyled ps-0">
				<li className="mb-1">
					<button className="btn btn-toggle align-items-center rounded collapsed">
						Home
					</button>
					<div className="collapse show" id="home-collapse">
						<ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
							<li><a href="#" className="link-dark rounded">Overview</a></li>
							<li><a href="#" className="link-dark rounded">Updates</a></li>
							<li><a href="#" className="link-dark rounded">Reports</a></li>
						</ul>
					</div>
				</li>
				<li className="mb-1">
					<button className="btn btn-toggle align-items-center rounded collapsed" >
						Dashboard
					</button>
					<div className="collapse" id="dashboard-collapse">
						<ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
							<li><a href="#" className="link-dark rounded">Overview</a></li>
							<li><a href="#" className="link-dark rounded">Weekly</a></li>
							<li><a href="#" className="link-dark rounded">Monthly</a></li>
							<li><a href="#" className="link-dark rounded">Annually</a></li>
						</ul>
					</div>
				</li>
				<li className="mb-1">
					<button className="btn btn-toggle align-items-center rounded collapsed" >
						Orders
					</button>
					<div className="collapse" id="orders-collapse">
						<ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
							<li><a href="#" className="link-dark rounded">New</a></li>
							<li><a href="#" className="link-dark rounded">Processed</a></li>
							<li><a href="#" className="link-dark rounded">Shipped</a></li>
							<li><a href="#" className="link-dark rounded">Returned</a></li>
						</ul>
					</div>
				</li>
				<li className="border-top my-3"></li>
				<li className="mb-1">
					<button className="btn btn-toggle align-items-center rounded collapsed">
						Account
					</button>
					<div className="collapse" id="account-collapse">
						<ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
							<li><a href="#" className="link-dark rounded">New...</a></li>
							<li><a href="#" className="link-dark rounded">Profile</a></li>
							<li><a href="#" className="link-dark rounded">Settings</a></li>
							<li><a href="#" className="link-dark rounded">Sign out</a></li>
						</ul>
					</div>
				</li>
			</ul>
		</div>
	);
}
export default SideBar;