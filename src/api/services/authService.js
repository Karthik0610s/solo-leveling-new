import axios from "../config";


export default {
  login: data =>
    axios.post("/auth/login", data).then(res => res.data),

  signup: data =>
    axios.post("/auth/signup", data).then(res => res.data)
};
