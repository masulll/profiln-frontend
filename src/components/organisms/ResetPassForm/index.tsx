import { styledForm } from "binar/constants/emotion/FormControl.style";

import ResetPassInput from "binar/components/molecules/ResetPassInput";
const ResetPassForm: React.FC = () => {
  return (
    <div className={`${styledForm} `}>
      <ResetPassInput />
    </div>
  );
};

export default ResetPassForm;
