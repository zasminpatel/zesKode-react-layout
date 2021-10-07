import axios from "axios";
import loggedHeader from "./logged-header";

const API_URL = "https://localhost:44365/api/v1.0/dashboard/";

const getActivityCounter = () => {
  return axios.get(API_URL + "activitycounter/7278", { headers: loggedHeader() });
};

export default { getActivityCounter };