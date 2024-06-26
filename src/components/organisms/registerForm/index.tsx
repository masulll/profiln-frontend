import InputForm from "binar/components/molecules/InputForm";
import { useState } from "react";
import { useRouter } from "next/router";
import FormTitle from "binar/components/molecules/FormTitle";
import {
  styledErrorText,
  styledForm,
} from "binar/styles/emotion/FormControl.style";
import { ButtonWithIcon } from "binar/components/atoms/Buttons";
import {
  OrTextStyle,
  OrWithLineStyle,
} from "binar/styles/emotion/FormControl.style";
import { useAuth } from "binar/contexts/AuthContext";

const RegisterForm: React.FC = () => {
  const { push, query } = useRouter();
  const { googleRegister, errorMessage } = useAuth();

  const callbackUrl: any = query.callbackUrl || "";
  return (
    <div className={`${styledForm} overflow-auto`}>
      <FormTitle
        title="Registrasi"
        wording="Buat akunmu untuk menjelajah lebih jauh"
      />
      <ButtonWithIcon
        buttonText="Daftar dengan Google"
        buttonIcon="/assets/icons/Google.svg"
        onClick={async () => {
          try {
            await googleRegister();
          } catch (error: any) {
            console.error(error);
          }
        }}
      />
      {errorMessage && <p className={styledErrorText}>{errorMessage}</p>}
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
