import axios from 'axios';
import jwt from 'jsonwebtoken';

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    paramsOrData["_token"] = localStorage.getItem('_token');

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData})).data;
        // axios sends query string data via the "params" key,
        // and request body data via the "data" key,
        // so the key we need depends on the HTTP verb
    }

    catch(err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(data) {
    let res = await this.request(`companies/${data.handle}`, data);
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
    return res;
  }

  static async getUser(data) {
    let token = jwt.decode(data);
    let res = await this.request(`users/${token.username}`);
    return res;
  }
}
export default JoblyApi;