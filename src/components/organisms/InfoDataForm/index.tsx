import AboutMe from "binar/components/molecules/InformationForm/AboutMe";
import CertificateForm from "binar/components/molecules/InformationForm/CertificateForm";
import Education from "binar/components/molecules/InformationForm/Education";
import PersonalData from "binar/components/molecules/InformationForm/PersonalData";
import Skill from "binar/components/molecules/InformationForm/Skill";
import WorkHistory from "binar/components/molecules/InformationForm/WorkHistory";
import theme from "binar/constants";
import { IconArrowRight } from "binar/helpers";
import { styledUnderlineText } from "binar/styles/emotion/DataForm.style";

const InfoDataForm = () => {
  return (
    <div className="">
      {/* <PersonalData /> */}
      {/* <AboutMe /> */}
      {/* <WorkHistory /> */}
      {/* <Education /> */}
      {/* <CertificateForm /> */}
      <Skill />
    </div>
  );
};

export default InfoDataForm;
