import InputForm from "binar/components/molecules/InputForm";
import React, { useState } from "react";

import FormTitle from "binar/components/molecules/FormTitle";
import { styledForm } from "binar/constants/emotion/FormControl.style";
import Link from "next/link";
import { styledLink } from "binar/constants/emotion/Link.style";
import VerificationInput from "react-verification-input";
const VerificationForm: React.FC = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className={`${styledForm} `}>
      <FormTitle
        title="Konfirmasi Email Kamu"
        wording="Masukkan kode verifikasi yang kami kirimkan melalui email:"
      />
      <p>email@binarlabs.co.id</p>

      <Link href={"/"} className={`${styledLink}`}>
        Ubah Email
      </Link>

      <VerificationInput
        validChars="0-9"
        inputProps={{ inputMode: "numeric" }}
        placeholder=" "
        classNames={{ character: "border-none" }}
      />
    </div>
  );
};

export default VerificationForm;
