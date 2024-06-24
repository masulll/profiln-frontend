import axiosInstance from "..";
import { loginData } from "binar/types/data";
export const loginGoogle = async (userData: loginData) => {
  try {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/api/v1/login?type=sso",
      headers: {},
      data: userData,
    };

    const response = await axiosInstance(config);
    console.log(response.data);

    return response.data;
  } catch (error) {
    // console.log(error);
    throw error;
  }
};
