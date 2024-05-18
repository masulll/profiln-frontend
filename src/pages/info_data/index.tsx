import InfoDataForm from "binar/components/organisms/InfoDataForm";
import { styledFormLayout } from "binar/constants/emotion/DataForm.style";

const index = () => {
  return (
    <div className="container">
      <div className={`${styledFormLayout} mx-auto `}>
        <InfoDataForm />
      </div>
    </div>
  );
};

export default index;
