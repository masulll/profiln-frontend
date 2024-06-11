import AboutMe from "binar/components/molecules/InformationForm/AboutMe";
import PersonalData from "binar/components/molecules/InformationForm/PersonalData";
import WorkHistory from "binar/components/molecules/InformationForm/WorkHistory";
import theme from "binar/constants";
import { IconArrowRight } from "binar/helpers";
import { styledUnderlineText } from "binar/styles/emotion/DataForm.style";

const InfoDataForm = () => {
  return (
    <div className="">
      {/* <PersonalData /> */}
      {/* <AboutMe /> */}
      <WorkHistory />
    </div>
  );
};

export default InfoDataForm;
