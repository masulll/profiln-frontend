import Image from "next/image";
import {
  BgAuth,
  StyledRegister,
  welcomeTextStyle,
} from "binar/styles/emotion/register.style";
import { styledFormLayout } from "binar/styles/emotion/FormControl.style";

import ResetPassForm from "binar/components/organisms/ResetPassForm";
const resetPass = () => {
  return (
    <>
      <div className="container">
        <Image
          src="/assets/images/auth-bg 1.svg"
          width={181}
          height={1024}
          alt="auth-bg 1"
          className={`${BgAuth} `}
        />
        <div className="row">
          <div className={`${StyledRegister} col-7`}>
            <div>
              <h3 className={`${welcomeTextStyle}`}>Selamat Datang di</h3>
              <Image
                src={"/assets/logo/Logo Binar.svg"}
                width={329}
                height={128}
                alt="Logo Binar"
                className="bg-transparent"
              />
            </div>
          </div>
          <div className={`${styledFormLayout} col-5 mx-auto`}>
            <ResetPassForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default resetPass;