import axiosInstance from "..";
import { loginData } from "binar/types/data";

export const loginUser = async (userData: loginData) => {
  try {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/api/v1/login?type=app",
      headers: {},
      data: userData,
    };

    const response = await axiosInstance(config);
    console.log(response.data);

    return response.data;
  } catch (error) {
    throw error;
  }
};
