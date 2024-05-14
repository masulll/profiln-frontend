import { css } from "@emotion/css";
import {
  FooterLinkForm,
  TextFooterForm,
} from "binar/constants/emotion/FormControl.style";
import Link from "next/link";

const FooterLink = css`
  ${FooterLinkForm}
`;

const TextFooter = css`
  ${TextFooterForm}
`;

interface Props {
  href: string;
  text: string;
  linkText: string;
}

export const HaveAccount: React.FC<Props> = ({ href, linkText, text }) => {
  return (
    <>
      <p className={`${TextFooter}`}>
        {text}
        <Link
          href={href}
          className={`${FooterLink}`}
          style={{ textDecoration: "none" }}
        >
          {linkText}
        </Link>
      </p>
    </>
  );
};

export const NotHaveAccount = () => {
  return (
    <>
      <p className={`${TextFooter}`}>
        Belum memiliki akun?
        <Link
          href={"/register"}
          className={`${FooterLink}`}
          style={{ textDecoration: "none" }}
        >
          Daftar di sini
        </Link>
      </p>
    </>
  );
};
