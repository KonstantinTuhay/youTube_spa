import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.headers["Content-Type"] = "application/json;charset=utf-8";
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
