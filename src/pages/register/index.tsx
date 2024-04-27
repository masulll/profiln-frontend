import RegisterForm from "binar/components/organisms/registerForm";
import Image from "next/image";
import { BgAuth, StyledRegister } from "binar/constants/emotion/register.style";
import { styledFormLayout } from "binar/constants/emotion/FormControl.style";
const register = () => {
  return (
    <>
      <div className="container">
        <Image
          src="assets/images/auth-bg 1.svg"
          width={181}
          height={1024}
          alt="auth-bg 1"
          className={`${BgAuth} `}
        />
        <div className="row">
          <div className={`${StyledRegister} col-7`}>
            <div>
              <h2>Selamat Datang di</h2>
              <Image
                src={"assets/logo/Logo Binar.svg"}
                width={329}
                height={128}
                alt="Logo Binar"
              />
            </div>
          </div>
          <div className={`${styledFormLayout} col-5 `}>
            <RegisterForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
