import axiosInstance from "..";

export const sendForgetEmail = async (userData: emailData) => {
  try {
    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "/api/v1/email/reset-password",
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
