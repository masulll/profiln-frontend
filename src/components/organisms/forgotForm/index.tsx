import { styledForm } from "binar/styles/emotion/FormControl.style";
import FormTitle from "binar/components/molecules/FormTitle";

import ForgetInput from "binar/components/molecules/ForgetInput";
const ForgetForm: React.FC = () => {
  return (
    <div className={`${styledForm} `}>
      <ForgetInput />
    </div>
  );
};

export default ForgetForm;
