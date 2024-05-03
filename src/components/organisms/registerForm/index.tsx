import InputForm from "binar/components/molecules/InputForm";
import { useRouter } from "next/router";
import FormTitle from "binar/components/molecules/FormTitle";
import { styledForm } from "binar/constants/emotion/FormControl.style";
import { ButtonWithIcon } from "binar/components/atoms/Buttons";
import {
  OrTextStyle,
  OrWithLineStyle,
} from "binar/constants/emotion/FormControl.style";
import { signIn } from "next-auth/react";

const RegisterForm: React.FC = () => {
  const { push, query } = useRouter();

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
        onClick={() =>
          signIn("google", {
            redirect: false,
            callbackUrl,
          })
        }
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
