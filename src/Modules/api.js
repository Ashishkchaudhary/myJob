import axios from "axios";
import { BASE_URL } from "./constant";

export const loginHandler = (params) => {
  return axios.post(BASE_URL + "auth/login", params);
}

export const onResetPassword = (params) => {
  return axios.get(BASE_URL + "auth/resetpassword?", {params});
}

export const registerHandler = (params) => {
  return axios.post(BASE_URL + "auth/register", params);
}

export const getJobData = () => {
  return axios.get(BASE_URL + "jobs");
}

export const fetchJobDetail = (param) => {
  return axios.get(BASE_URL + `jobs/${param}`)
}