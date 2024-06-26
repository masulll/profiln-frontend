import axiosInstance from "..";
import { otpData } from "binar/types/data";
import Cookies from "js-cookie";

export const verificationUser = async (otpData: otpData) => {
  try {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/api/v1/user-otp",
      headers: {},
      data: otpData,
    };

    const response = await axiosInstance(config);

    if (response.data && response.data.token) {
      const token = response.data.token;
      Cookies.set("token", token, {
        sameSite: "strict",
        secure: true,
        expires: 7,
      });
      console.log("Token saved:", token);
    }

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
