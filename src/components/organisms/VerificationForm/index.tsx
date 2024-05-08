"use client";
import { useRef, useState, useEffect, ClipboardEvent } from "react";
import { Button, Form } from "react-bootstrap";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
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
  const otpSchema = Yup.object().shape({
    otp: Yup.array()
      .of(Yup.string().required("Required"))
      .min(6, "Please enter 6 digits OTP"),
  });

  const formik = useFormik({
    initialValues: {
      email: "sultan123@gmail.com",
      otp: Array.from({ length: 6 }).fill(""),
    },
    validationSchema: otpSchema,
    onSubmit: (values) => {
      const joinedOTP = values.otp.join(""); // Gabungkan nilai dalam array otp
      sessionStorage.setItem(
        "data",
        JSON.stringify({ ...values, otp: joinedOTP })
      );
    },
  });

  //   use ref
  const inputRef = useRef<HTMLInputElement[]>([]);
  console.log(formik.values.otp);
  useEffect(() => {
    // Focus on the first input when the component mounts
    inputRef.current[0].focus();
    // paste event listener pasteText
    inputRef.current[0].addEventListener("paste", pasteText);

    return () => inputRef.current[0].removeEventListener("paste", pasteText);
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;

    if (/[a-z]/gi.test(value)) return;

    const currentOTP = [...formik.values.otp];
    currentOTP[index] = value.slice(-1);

    formik.setValues((prev) => ({
      ...prev,
      otp: currentOTP,
    }));

    if (value && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };

  const pasteText = (event: ClipboardEvent<HTMLInputElement>) => {
    const pastedText = event.clipboardData?.getData("text") || "";
    const numericPastedText = pastedText.replace(/\D/g, ""); // Filter out non-numeric characters
    const fieldValues: { [key: string]: string } = {};
    Object.keys(formik.values.otp).forEach((key, index) => {
      fieldValues[key] = numericPastedText[index] || "";
    });
    formik.setValues((prevValues) => ({
      ...prevValues,
      otp: Object.keys(prevValues.otp).map((index) => fieldValues[index] || ""),
    }));
    inputRef.current[5].focus();
  };

  const handleBackspace = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace") {
      if (index > 0) {
        inputRef.current[index - 1].focus();
      }
    }
  };

  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  return (
    <>
      <div className={`${styledForm} `}>
        <FormTitle title="Konfirmasi Email Kamu" />
        <Form onSubmit={formik.handleSubmit}>
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
            {formik.values.otp.map((value: any, index: number) => (
              <input
                className={`${styledInput}`}
                name={index.toString()}
                key={index}
                type="text"
                maxLength={1}
                value={value}
                ref={(element) =>
                  (inputRef.current[index] = element as HTMLInputElement)
                }
                onChange={(event) => handleInputChange(event, index)}
                onKeyUp={(event) => handleBackspace(event, index)}
              />
            ))}
          </div>
          <div className={`${timerLayout}`}>
            <p>
              {`${minutes}`}:{seconds < 10 ? `0${seconds}` : `${seconds}`}
            </p>
            <button
              type="button"
              disabled={seconds > 0 || minutes > 0}
              className={`${resendButton}`}
            >
              <p>kirim ulang?</p>
            </button>
          </div>

          <PrimaryButton
            buttonText="Verifikasi dan Lanjutkan"
            type="submit"
            disabled={!formik.isValid || !formik.dirty}
          />
        </Form>
      </div>
    </>
  );
};

export default VerificationForm;
