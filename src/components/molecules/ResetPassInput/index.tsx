import { Form, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import InputComponent from "binar/components/atoms/InputComponent";
import FormTitle from "binar/components/molecules/FormTitle";
import { PrimaryButton } from "binar/components/atoms/Buttons";
import Labels from "binar/components/atoms/labels";
import Image from "next/image";
import { useRouter } from "next/router";
// import API from "binar/pages/api/v1";
import { registerUser } from "binar/pages/api/v1/register";
import { error } from "console";
import Link from "next/link";
import {
  IconStyling,
  StyledInputGroup,
  StyledResetLink,
  Wrapper,
  styledErrorText,
} from "binar/constants/emotion/FormControl.style";
import { resetUserPass } from "binar/pages/api/v1/resetUserPass";
import { AxiosError } from "axios";

const ResetPassInput: React.FC = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [sendErrorText, setSendErrorText] = useState("");
  const router = useRouter();

  const changeVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  const changeVisibility2 = () => {
    setIsVisible2((prevVisible) => !prevVisible);
  };

  const resetSchema = Yup.object().shape({
    password: Yup.string()
      .required("Anda belum mengisi password")
      .min(8, "Minimal 8 karakter")
      .matches(
        /[^\w\s]/,
        "Minimal berisi satu karakter spesial dan bukan underscore '_'"
      )
      .matches(/^(?=.*[A-Z])/, "Minimal berisi satu karakter huruf besar")
      .matches(/^(?=.*[a-z])/, "Minimal berisi satu karakter huruf")
      .matches(/^(?=.*[0-9])/, "Minimal berisi satu angka"),
    retypePassword: Yup.string()
      .required("Anda belum menulis ulang password")
      .oneOf([Yup.ref("password")], "Passwords tidak sama"),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          retypePassword: "",
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            const { email, password } = values;
            const response = await resetUserPass({ email, password });
            console.log("response", response);

            setIsSubmit(true);
          } catch (error) {
            console.error(error);
            if ((error as AxiosError).response?.status === 422) {
              setSendErrorText("Gagal menyimpan password");
            }
          } finally {
            setSubmitting(false);
          }
        }}
        validate={(values) => {
          return resetSchema
            .validate(values, { abortEarly: false })
            .then(() => {})
            .catch((err) => {
              const errors: { [key: string]: string[] } = {};
              err.inner.forEach((error: any) => {
                if (!errors[error.path]) {
                  errors[error.path] = [];
                }
                errors[error.path].push(error.message);
              });
              return errors;
            });
        }}
      >
        {({
          errors,
          handleChange,
          values,
          handleSubmit,
          touched,
          isValid,

          handleBlur,
          isSubmitting,
          dirty,
        }) => (
          <Form onSubmit={handleSubmit}>
            {isSubmit ? (
              <>
                <FormTitle
                  title="Password Berhasil di Reset"
                  wording={
                    "Pastikan untuk masuk dengan menggunakan alamat email dan password yang baru saja Anda buat."
                  }
                />
                <Link
                  href={`/auth/login`}
                  target="blank"
                  className={`${StyledResetLink}`}
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Login
                </Link>
              </>
            ) : (
              <>
                <FormTitle
                  title="Masukan Password Baru"
                  wording="Tentukan Password Baru Anda"
                />

                <Form.Group className="mb-3  ">
                  <Labels title={"Masukkan password baru anda"} />

                  <div className={`${Wrapper}`}>
                    <InputGroup hasValidation>
                      <Form.Control
                        name="password"
                        type={isVisible ? "text" : "password"}
                        placeholder={"Masukkan password baru anda"}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        isInvalid={!!errors.password && !!touched.password}
                        className={`${StyledInputGroup} `}
                      />

                      <div role="button" onClick={changeVisibility}>
                        <Image
                          src={
                            isVisible
                              ? `/assets/icons/Eye-visible.svg`
                              : `/assets/icons/Eye-invisible.svg`
                          }
                          width={24}
                          height={24}
                          alt=""
                          className={`${IconStyling}`}
                        />
                      </div>

                      <Form.Control.Feedback
                        type="invalid"
                        className={` ${styledErrorText} background-image-none`}
                      >
                        {errors.password && touched.password && (
                          <div>
                            {Array.isArray(errors.password) ? (
                              errors.password.map((error: any, index: any) => (
                                <div key={index}>{error}</div>
                              ))
                            ) : (
                              <div>{errors.password}</div>
                            )}
                          </div>
                        )}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </div>
                </Form.Group>
                <InputComponent
                  title={"Konfirmasi Password Baru Anda"}
                  name="retypePassword"
                  type={isVisible2 ? "text" : "password"}
                  value={values.retypePassword}
                  placeholder={"Konfirmasi Password Baru Anda"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={
                    !!errors.retypePassword && !!touched.retypePassword
                  }
                  viewEyeIcon={true}
                  eyeIcon={isVisible2}
                  errorText={errors.retypePassword}
                  togglePasswordVisibility={changeVisibility2}
                />
                {sendErrorText && (
                  <p className={`${styledErrorText}`}>{sendErrorText}</p>
                )}
                <Form.Group>
                  <PrimaryButton
                    buttonText="Reset Password"
                    type="submit"
                    disabled={!isValid || !dirty}
                    isSubmitting={isSubmitting}
                  />
                </Form.Group>
              </>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ResetPassInput;
