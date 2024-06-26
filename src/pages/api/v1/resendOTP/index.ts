import axios from "axios";
import axiosInstance from "..";
import { otpData } from "binar/types/data";

export const resendOTP = async (otpData: otpData) => {
  try {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      //   belum di set untuk resend otp
      url: "/api/v1/user-otp",
      headers: {},
      data: otpData,
    };

    const response = await axiosInstance(config);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
