import styled from "@emotion/styled";
import theme from "binar/constants";
import Link from "next/link";

const TextFooter = styled.p`
  color: ${theme.neutral_colors.grayscale_80};
  font-family: Causten;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
export const HaveAccount = () => {
  const FooterLink = styled.a`
    color: ${theme.text_colors.primary};
    font-family: Causten;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 4px;
  `;
  return (
    <>
      <TextFooter>
        Sudah memiliki akun?
        <Link href={"/login"} style={{ textDecoration: "none" }}>
          <FooterLink>Masuk di sini</FooterLink>
        </Link>
      </TextFooter>
    </>
  );
};

export const NotHaveAccount = () => {
  const FooterLink = styled.a`
    color: ${theme.text_colors.primary};
    font-family: Causten;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  `;
  return (
    <>
      <TextFooter>
        Belum memiliki akun?
        <Link href={"/register"} style={{ textDecoration: "none" }}>
          <FooterLink> Daftar di sini</FooterLink>
        </Link>
      </TextFooter>
    </>
  );
};
