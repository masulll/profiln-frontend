import axios from "axios";
import userData from "binar/types/userData";
import axiosInstance from "..";

export const registerUser = async (userData: userData) => {
  try {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/api/v1/register?oauth=false",
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
