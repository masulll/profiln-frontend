import { useQuery } from "react-query";
import axiosInstance from "binar/pages/api/v1";

export const getSkills = async () => {
  const response = await axiosInstance.get("/api/v1/skills?page=1&limit=5");
  return response.data.data.data;
};

const useSkills = () => {
  return useQuery("skills", getSkills);
};

export default useSkills;
