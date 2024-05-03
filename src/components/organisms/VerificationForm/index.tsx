"use client";
import React, { useState, useRef } from "react";
import { Form } from "react-bootstrap";
import FormTitle from "binar/components/molecules/FormTitle";
import { styledForm } from "binar/constants/emotion/FormControl.style";
import Link from "next/link";
import { styledLink } from "binar/constants/emotion/Link.style";
import { PrimaryButton } from "binar/components/atoms/Buttons";
import {
  resendButton,
  styledInput,
  styledOTPLayout,
  timerLayout,
  verifText,
} from "binar/constants/emotion/Verification.style";
const VerificationForm: React.FC = () => {
  const [otpValues, setOtpValues] = useState<string[]>(Array(6).fill(" "));
  const otpRefs = useRef<Array<React.LegacyRef<HTMLInputElement>>>(
    Array(6).fill(null)
  );

  const handleOtpChanges = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const val = e.target.value;
    if (!isNaN(parseFloat(val))) {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = val;
      setOtpValues(newOtpValues);
    }
  };

  const handleKeyUp = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    const key = e.key.toLowerCase();
    if (key === "backspace" || "delete") {
      const newOtpValues = [...otpValues];
      newOtpValues[index] = "";
      setOtpValues(newOtpValues);

      if (index > 0) {
        (
          otpRefs.current[index - 1] as React.RefObject<HTMLInputElement>
        ).current?.focus();
      }
    }
  };

  return (
    <>
      <div className={`${styledForm} `}>
        <FormTitle title="Konfirmasi Email Kamu" />

        <Form>
          <Form.Group>
            <p className={`${verifText}`}>
              Masukkan kode verifikasi yang kami kirimkan melalui email: <br />
              email@binar.labs
            </p>
            <Link href={"/"} className={`${styledLink}`}>
              Ubah Email
            </Link>
          </Form.Group>
          <div className={`${styledOTPLayout} `}>
            {otpValues.map((value, index) => (
              <input
                className={`${styledInput}`}
                key={index}
                ref={(el) =>
                  (otpRefs.current[index] =
                    el as React.LegacyRef<HTMLInputElement>)
                }
                value={value}
                onChange={(e) => handleOtpChanges(index, e)}
                onKeyUp={(e) => handleKeyUp(index, e)}
              />
            ))}
          </div>
          <div className={`${timerLayout}`}>
            <p>0:59</p>
            <div role="button" className={`${resendButton}`}>
              <p>kirim ulang?</p>
            </div>
          </div>
          <PrimaryButton buttonText="Verifikasi dan Lanjutkan" type="submit" />
        </Form>
      </div>
    </>
  );
};

export default VerificationForm;
