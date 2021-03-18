import axios from "axios";
import { environment } from "helpers/constants/constants";
import { constants, errors } from "../constants";

export const get = (endpoint, data, token) => {
  let apiUrl;
  if (constants.environment === "development") apiUrl = "http://localhost:3000";

  return axios
    .get(`${apiUrl}/${endpoint}`, {
      params: data,
      headers: {
        "X-Auth-Token": token,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res) return Promise.resolve(res);
      else Promise.reject(errors.Errors.ERR_DATA_NOT_FETCHED);
    })
    .catch((e) => console.log(e));
};

export const post = (endpoint, data, token) => {
  let apiUrl;
  if (constants.environment === "development") apiUrl = "http://localhost:3000";

  return axios
    .post(`${apiUrl}/${endpoint}`, {
      params: data,
      headers: {
        "X-Auth-Token": token,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res) return Promise.resolve(res);
      else Promise.reject(errors.Errors.ERR_DATA_NOT_POSTED);
    })
    .catch((e) => console.log(e));
};
