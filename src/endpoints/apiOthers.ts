import axiosInstance from "binar/pages/api/v1";

export const getAllSkills = async () => {
  let allSkills: any[] = [];
  let page = 1;
  let limit = 100;

  while (true) {
    const response = await axiosInstance.get(
      `/api/v1/skills?page=${page}&limit=${limit}`
    );
    const skillsData = response.data.data.data;

    if (skillsData.length === 0) {
      break;
    }

    allSkills = [...allSkills, ...skillsData];
    page++;
  }

  return allSkills;
};
