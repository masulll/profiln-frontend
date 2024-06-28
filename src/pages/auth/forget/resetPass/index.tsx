import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { JwtPayload, jwtDecode } from "jwt-decode";
import {
  BgAuth,
  StyledRegister,
  welcomeTextStyle,
} from "binar/styles/emotion/register.style";
import { styledFormLayout } from "binar/styles/emotion/FormControl.style";
import ResetPassForm from "binar/components/organisms/ResetPassForm";

const ResetPass = () => {
  const router = useRouter();

  const loadPageWithToken = () => {
    const { token }: any = router.query;

    try {
      // Dekode token JWT menggunakan jwt-decode
      const decodedToken = jwtDecode<JwtPayload>(token);

      // Dapatkan email dari payload token
      const { email }: any = decodedToken;

      sessionStorage.setItem("email", email);

      console.log("Email yang didapat:", email);
    } catch (error) {
      console.error("Gagal mendekode token:", error);
      router.push("/");
    }
  };

  useEffect(() => {
    if (router.isReady) {
      loadPageWithToken();
    }
  }, [router.isReady]);

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

export default ResetPass;
