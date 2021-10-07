import axios from "axios";

//const API_URL = "https://localhost:44365/api/v1.0/auth/";
const API_URL = "http://192.168.101.37:8080/api/v1.0/auth/";
const login = (logindata)=> {
	debugger;
	console.log(logindata);
	const headers = { 
		'Access-Control-Allow-Origin': '*'
	};
	return axios
		.post(API_URL + "authenticate", logindata, { headers })
		.then((response)=>{
			localStorage.setItem("user", JSON.stringify(response.data));
			// if (logindata.remember) {
				// localStorage.setItem("user", JSON.stringify(response.data));
			// }
			// else{
				// sessionStorage.setItem("user", JSON.stringify(response.data));
			// }
			return response.data;			
		});
}
const logout = () => {
	localStorage.removeItem("user");
};

export default {login, logout};
