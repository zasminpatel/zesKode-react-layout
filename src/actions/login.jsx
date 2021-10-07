import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT,
	SET_MESSAGE,
} from "./types";
import LoginService from "services/login.service";

export const login = (logindata) => (dispatch) => {
	debugger;
	return LoginService.login(logindata).then(
		(data) => {
			debugger;
			dispatch({
				type: LOGIN_SUCCESS,
				payload: { user: data },
			});

			return Promise.resolve();
		},
		(error) => {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			dispatch({
				type: LOGIN_FAIL,
			});

			dispatch({
				type: SET_MESSAGE,
				payload: message,
			});

			return Promise.reject();
		});
};

export const logout = () => (dispatch) => {
	LoginService.logout();
	dispatch({
		type: LOGOUT,
	});
};