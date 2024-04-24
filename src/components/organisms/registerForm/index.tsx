import InputForm from "binar/components/molecules/InputForm";

import FormTitle from "binar/components/molecules/FormTitle";
import { styledForm } from "binar/constants/emotion/FormControl.style";
import { ButtonWithIcon } from "binar/components/atoms/Buttons";
import {
  containerStyle,
  styledLine,
  styledLineText,
} from "binar/constants/emotion/register.style";
const RegisterForm: React.FC = () => {
  return (
    <div className={` ${styledForm} `}>
      <FormTitle
        title="Registrasi"
        wording="Buat akunmu untuk menjelajah lebih jauh"
      />
      {/* <ButtonWithIcon
        buttonText="Google"
        buttonIcon="/assets/icons/Google.svg"
      /> */}
      <div className={`${containerStyle}`}>
        <div className={`${styledLine}`} />
        <p className={`${styledLineText}`}>atau</p>
        <div className={`${styledLine}`} />
      </div>

      <InputForm />
    </div>
  );
};

export default RegisterForm;
