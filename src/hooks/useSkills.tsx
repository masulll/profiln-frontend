import { useQuery } from "react-query";
import { getAllSkills } from "binar/endpoints";

const useSkills = () => {
  return useQuery("skills", getAllSkills);
};

export default useSkills;
