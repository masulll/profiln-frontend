import InputForm from "binar/components/molecules/InputForm";

import FormTitle from "binar/components/molecules/FormTitle";
import { styledForm } from "binar/constants/emotion/FormControl.style";
import { ButtonWithIcon } from "binar/components/atoms/Buttons";
import {
  OrTextStyle,
  OrWithLineStyle,
} from "binar/constants/emotion/FormControl.style";
const RegisterForm: React.FC = () => {
  return (
    <div className={`${styledForm} `}>
      <FormTitle
        title="Registrasi"
        wording="Buat akunmu untuk menjelajah lebih jauh"
      />
      <ButtonWithIcon
        buttonText="Google"
        buttonIcon="/assets/icons/Google.svg"
      />
      <div>
        <div className={`${OrWithLineStyle}`}>
          <p className={`${OrTextStyle}`}>atau</p>
        </div>
      </div>

      <InputForm />
    </div>
  );
};

export default RegisterForm;
