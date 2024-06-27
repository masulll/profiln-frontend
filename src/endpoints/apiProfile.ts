import axiosInstance from "binar/pages/api/v1";
import { AboutData } from "binar/types/data/infoData";

const baseprofile = "/api/v1/users/me";

export const postPersonalData = async (data: FormData) => {
  const response = await axiosInstance.post(`${baseprofile}/profile`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    maxBodyLength: Infinity,
  });
  console.log(response.data);
  return response.data;
};

export const postAbout = async (data: AboutData) => {
  const response = await axiosInstance.put(`${baseprofile}/about`, data);

  console.log(response.data);
  return response.data;
};
