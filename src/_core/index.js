import axios from "axios";
import { loadState } from "./localStorage";
import config from "./config";

const isUserLoggedIn = () => !!(loadState().user && loadState().user.loggedIn);

const baseUrl = config.getBasePublicUrl() + "api";

// todo: check if needed
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";

const baseRequest = {
  addHeader: (token) => {
    let sessionToken = null;
    if (isUserLoggedIn()) {
      sessionToken = loadState().user.token;
    }
    
    axios.defaults.headers.common["Authorization"] = "Bearer " + (sessionToken || token);
  },
  clearHeader: () => {
    axios.defaults.headers.common["Authorization"] = "Bearer ";
  },
  request: (method, path, params, responseType) => {
    return axios({ method, url: path, data: params, responseType }).then(result => {
      if (result.data.message) {
        throw new Error(result.data.message);
      } else {
        return result.data;
      }
    });
  },
  get: (path) => baseRequest.request("GET", path),
  post: (path, params) => baseRequest.request("POST", path, params),
 
  
};

baseRequest.addHeader();

export default baseRequest;
