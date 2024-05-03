import axios from "axios";
import userData from "binar/types/userData";
import axiosInstance from "..";
import FormData from "form-data";

export const registerUser = async (userData: userData) => {
  try {
    const data = new FormData();
    data.append("Email", userData.email);
    data.append("Password", userData.password);
    data.append("Fullname", userData.fullname);

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/api/v1/register?oauth=true",
      headers: {},
      data: data,
    };

    const response = await axiosInstance(config);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
