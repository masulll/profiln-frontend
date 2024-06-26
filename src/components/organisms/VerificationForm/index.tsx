"use client";
import { useRef, useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import FormTitle from "binar/components/molecules/FormTitle";
import { styledForm } from "binar/styles/emotion/FormControl.style";
import { useRouter } from "next/router";
import Link from "next/link";
import { styledLink } from "binar/styles/emotion/Link.style";
import { PrimaryButton } from "binar/components/atoms/Buttons";
import {
  resendButton,
  styledInput,
  styledOTPLayout,
  timerLayout,
  verifText,
} from "binar/styles/emotion/Verification.style";
import { verificationUser } from "binar/pages/api/v1/verification";

const VerificationForm: React.FC = () => {
  const router = useRouter();
  const { email } = router.query;
  console.log(email);
  const otpSchema = Yup.object().shape({
    otp: Yup.array()
      .of(Yup.string().required("Required"))
      .min(6, "Please enter 6 digits OTP"),
  });

  const formik = useFormik({
    initialValues: {
      email: { email },
      otp: Array.from({ length: 6 }).fill(""),
    },
    validationSchema: otpSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const joinedOTP = values.otp.join("");
        const response = await verificationUser({ email, otp: joinedOTP });
        console.log("response", response);
        if (response.status.is_success === true) {
          router.push({
            pathname: "/info_data",
          });
        }
      } catch (error) {
        console.error();
      } finally {
        setSubmitting(false);
      }
    },
  });

  //   use ref
  const inputRef = useRef<(HTMLInputElement | null)[]>([]);
  console.log(formik.values.otp);
  useEffect(() => {
    // Focus on the first input when the component mounts
    inputRef.current[0]?.focus();
  }, []);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = event.target;

    if (!/^[0-9]*$/.test(value)) return;

    const currentOTP = [...formik.values.otp];
    currentOTP[index] = value.slice(-1);

    formik.setValues((prev) => ({
      ...prev,
      otp: currentOTP,
    }));

    if (value && index < 5) {
      inputRef.current[index + 1]?.focus();
    }
  };

  const pasteText = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedText = event.clipboardData?.getData("text") || "";
    const numericPastedText = pastedText.replace(/\D/g, "");
    const fieldValues: { [key: string]: string } = {};
    Object.keys(formik.values.otp).forEach((key, index) => {
      fieldValues[key] = numericPastedText[index] || "";
    });
    formik.setValues((prevValues) => ({
      ...prevValues,
      otp: Object.keys(prevValues.otp).map((index) => fieldValues[index] || ""),
    }));
    inputRef.current[5]?.focus();
  };

  const handleBackspace = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (event.key === "Backspace" || event.key === "Delete") {
      if (index > 0) {
        const currentOTP = [...formik.values.otp];
        currentOTP[index - 1] = "";
        formik.setValues((prev) => ({
          ...prev,
          otp: currentOTP,
        }));
      }
      inputRef.current[index - 1]?.focus();
    }
  };
  // timer component
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(0);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [minutes, seconds]);

  return (
    <>
      <div className={`${styledForm} `}>
        <FormTitle title="Konfirmasi Email Kamu" />
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <p className={`${verifText}`}>
              Masukkan kode verifikasi yang kami kirimkan melalui email: <br />
              {email}
            </p>
            <Link href={"/auth/register"} className={`${styledLink}`}>
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
                ref={(element: HTMLInputElement | null) => {
                  if (element) inputRef.current[index] = element;
                }}
                onPaste={(event) => pasteText(event)}
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
              onClick={resendOTP}
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
