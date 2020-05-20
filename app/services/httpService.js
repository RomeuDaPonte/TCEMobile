import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const espectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!espectedError) {
    console.log("Logging error", error);
  }

  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt,
};
