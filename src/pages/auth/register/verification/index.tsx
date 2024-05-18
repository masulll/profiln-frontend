import Image from "next/image";
import {
  BgAuth,
  StyledRegister,
  welcomeTextStyle,
} from "binar/constants/emotion/register.style";
import { styledFormLayout } from "binar/constants/emotion/FormControl.style";

import VerificationForm from "binar/components/organisms/VerificationForm";

const verification = () => {
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
              />
            </div>
          </div>
          <div className={`${styledFormLayout} col-5 mx-auto`}>
            <VerificationForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default verification;
