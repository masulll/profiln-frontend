import InfoDataForm from "binar/components/organisms/InfoDataForm";
import theme from "binar/constants";
import { IconArrowRight } from "binar/helpers";
import {
  styledFormLayout,
  styledUnderlineText,
} from "binar/styles/emotion/DataForm.style";

const index = () => {
  return (
    <div className="container position-relative">
      <div className={`${styledFormLayout}`}>
        <InfoDataForm />
      </div>
      <button
        className={`${styledUnderlineText} position-absolute`}
        style={{ top: "100px", right: "100px" }}
      >
        <IconArrowRight style={{ fill: theme.colors.primary }} /> Lewati langkah
        ini
      </button>
    </div>
  );
};

export default index;
