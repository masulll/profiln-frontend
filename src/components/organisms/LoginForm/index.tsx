import { ButtonWithIcon } from "binar/components/atoms/Buttons";
import {
  styledForm,
  OrWithLineStyle,
  OrTextStyle,
} from "binar/styles/emotion/FormControl.style";
import FormTitle from "binar/components/molecules/FormTitle";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import InputLoginForm from "binar/components/molecules/InputLoginForm";
import { useAuth } from "binar/contexts/AuthContext";
const LoginForm: React.FC = () => {
  const { push, query } = useRouter();
  const { googleLogin } = useAuth();
  const callbackUrl: any = query.callbackUrl || "";
  return (
    <div className={`${styledForm} overflow-auto`}>
      <FormTitle
        title="Selamat Datang"
        wording="Segera buka pintu ke pengalaman lengkap! Masuk sekarang."
      />
      <InputLoginForm />
      <div>
        <div className={`${OrWithLineStyle}`}>
          <p className={`${OrTextStyle}`}>atau</p>
        </div>
      </div>
      <ButtonWithIcon
        buttonText="Google"
        buttonIcon="/assets/icons/Google.svg"
        onClick={() => {
          googleLogin();
        }}
      />
    </div>
  );
};

export default LoginForm;
