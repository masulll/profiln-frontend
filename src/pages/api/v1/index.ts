import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `http://35.208.89.94`,
  //   baseURL: `${process.env.DB_HOST}`,
});

export default axiosInstance;
