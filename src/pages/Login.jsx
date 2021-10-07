import React from "react";
import { connect } from "react-redux";
import {login} from "actions/login"
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			remember:false,
			loading: false
		};
	}
	componentDidMount = () => {	};
	handleOnchange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	handleLogin = (e) => {
		e.preventDefault();
		this.setState({ loading: true },() =>
		{
			const logindata = {
				username: this.state.username,
				password: this.state.password,
				remember: this.state.remember
			};
			
			this.props.login(logindata)
				.then(() => {
					this.props.history.push("/admin");
					window.location.reload();
				})
				.catch(() => {
					this.setState({ loading: false });
				});
		});
	}
	render(){
		const { message, isLoggedIn } = this.props;
		const { username, password, loading } = this.state;
		return (
			<>
				<div className="container">
					<div className="col-md-12">
						<div className="card card-container">
						 
							<img
								src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
								alt="profile-img"
								className="profile-img-card"
							/>
							<form onSubmit={this.handleLogin}>
								<div className="form-group">
									<label htmlFor="username">Username</label>
									<input
										type="text"
										className="form-control"
										name="username"
										value={username}
										onChange={this.handleOnchange}
									/>
								</div>

								<div className="form-group">
									<label htmlFor="password">Password</label>
									<input
										type="password"
										className="form-control"
										name="password"
										value={password}
										onChange={this.handleOnchange}
									/>
								</div>

								<div className="form-group">
									<button className="btn btn-primary btn-block" disabled={loading}>
										{loading && (
											<span className="spinner-border spinner-border-sm"></span>
										)}
										<span>Login</span>
									</button>
								</div>

								{message && (
									<div className="form-group">
										<div className="alert alert-danger" role="alert">
											{message}
										</div>
									</div>
								)}
						  
							</form>
						
						</div>
					</div>
				</div>
			</>
		);
	}
}
const mapStateToProps = state => {
	return {
		message: state.message.message,
		isLoggedIn: state.login.isLoggedIn
	}
};
const actionCreators = (dispatch) => {
	return {
		login: (values) => dispatch(login(values))
	};
};
export default connect(mapStateToProps, actionCreators)(Login);