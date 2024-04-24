import RegisterForm from "binar/components/organisms/registerForm";
import Image from "next/image";
import { BgAuth, StyledRegister } from "binar/constants/emotion/register.style";

const register = () => {
  return (
    <>
      <div className={`${StyledRegister}`}>
        <Image
          src="assets/images/auth-bg 1.svg"
          width={181}
          height={1024}
          alt="auth-bg 1"
          className={`${BgAuth} `}
        />
        <div>
          <h1>Selamat Datang di</h1>
          <Image
            src={"assets/logo/Logo Binar.svg"}
            width={236}
            height={76}
            alt="Logo Binar"
          />
        </div>
        <RegisterForm />
      </div>
    </>
  );
};

export default register;
