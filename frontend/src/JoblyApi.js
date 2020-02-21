import axios from 'axios';
import jwt from "jsonwebtoken";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class JoblyApi {
  static async request(endpoint, params = {}, verb = "get") {
    /* Function that makes a request to backend
     * Default to `GET` request
     */
    let _token = localStorage.getItem("_token");

    console.debug("API Call:", endpoint, params, verb);

    let q;

    if (verb === "get") {
      q = axios.get(
        `${BASE_URL}/${endpoint}`, { params: { _token, ...params } });
    } else if (verb === "post") {
      q = axios.post(
        `${BASE_URL}/${endpoint}`, { _token, ...params });
    } else if (verb === "patch") {
      q = axios.patch(
        `${BASE_URL}/${endpoint}`, { _token, ...params });
    }
    try {
      return (await q).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }
  static async getCompany(handle, userInfo) {
    let { username } = userInfo;
    let res = await this.request(`companies/${handle}`, { params: { username } });
    return res.company;
  }

  static async getCompanies(data) {
    let res = await this.request('companies', data);
    return res.companies;
  }

  static async getJob(id) {
    let res = await this.request(`jobs/${id}`);
    return res.job
  }

  static async getJobs(data) {
    let res = await this.request('jobs', data);
    return res.jobs;
  }

  static async login(data) {
    let res = await this.request('login', data, 'post');
    return res;
  }

  static async register(data) {
    let res = await this.request('users', data, 'post');
    if (res) {
      return res;
    }
    console.error("User cannot be registered!");
  }

  static async getCurrentUser(token) {
    let userInfo = jwt.decode(token)
    let res = await this.request(`users/${userInfo.username}`);
    return res;
  }

  static async updateUser(username, data) {
    delete data._username
    delete data._submitted;
    let res = await this.request(`users/${username}`, data, 'patch');
    return res
  }

  static async applyToJob(id) {
    let res = await this.request(`jobs/${id}/apply`, {}, "post");
    return res.message
  }

  static async getAppliedJobs(username) {
    let res = await this.request(`users/${username}/jobs`, {}, "get");
    return res
  }


}
export default JoblyApi;