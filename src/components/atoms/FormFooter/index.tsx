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

export const HaveAccount = () => {
  return (
    <>
      <p className={`${TextFooter}`}>
        Sudah memiliki akun?
        <Link
          href={"/login"}
          className={`${FooterLink}`}
          style={{ textDecoration: "none" }}
        >
          Masuk di sini
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
