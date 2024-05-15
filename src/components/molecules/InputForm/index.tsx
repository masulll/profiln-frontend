import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import InputComponent from "binar/components/atoms/InputComponent";
import {
  StyledCheckboxInput,
  styledErrorText,
} from "binar/constants/emotion/FormControl.style";
import { PrimaryButton } from "binar/components/atoms/Buttons";
import { HaveAccount } from "binar/components/atoms/FormFooter";
import { useRouter } from "next/router";
// import API from "binar/pages/api/v1";
import { registerUser } from "binar/pages/api/v1/register";
import { error } from "console";
import { AxiosError } from "axios";

const InputForm: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [isVisible2, setIsVisible2] = useState(false);
  const router = useRouter();

  const changeVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  const changeVisibility2 = () => {
    setIsVisible2((prevVisible) => !prevVisible);
  };

  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email("Maaf penulisan email belum tepat. Misal: name@email.com")
      .min(10, "email minimal 10 karakter")
      .required("Anda belum mengisi email"),
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

    fullname: Yup.string().required("Anda belum mengisi nama lengkap"),
    terms: Yup.bool().required().oneOf([true], " "),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          fullname: "",
          password: "",
          retypePassword: "",
          terms: false,
        }}
        onSubmit={async (values, { setSubmitting }) => {
          try {
            // Destructure email, fullname, and password from values
            const { email, fullname, password } = values;
            const response = await registerUser({ email, fullname, password });
            console.log("response", response);
            if (response.status.is_success === true) {
              router.push({
                pathname: "/auth/register/verification",
                query: { email: values.email },
              });
            }
          } catch (error) {
            console.error(error);
            if ((error as AxiosError).response?.status === 401) {
              setRegisterError("Email sudah terdaftar");
            } else {
              setRegisterError("Registrasi gagal");
            }
          } finally {
            setSubmitting(false);
          }
        }}
        validationSchema={registerSchema}
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
            <InputComponent
              title="Email Anda"
              name="email"
              type="email"
              value={values.email}
              placeholder={"Masukkan email anda"}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.email && !!touched.email}
              viewEyeIcon={false}
              errorText={errors.email}
            />
            {registerError && (
              <p className={`${styledErrorText}`}>{registerError}</p>
            )}

            <InputComponent
              title={"Nama Lengkap Anda"}
              name="fullname"
              type={"text"}
              value={values.fullname}
              placeholder={"Masukkan nama lengkap anda"}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.fullname && !!touched.fullname}
              errorText={errors.fullname}
            />

            <InputComponent
              title={"Kata Sandi"}
              name="password"
              type={isVisible ? "text" : "password"}
              value={values.password}
              placeholder={"Masukkan kata sandi anda"}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.password && !!touched.password}
              viewEyeIcon={true}
              eyeIcon={isVisible}
              errorText={errors.password}
              togglePasswordVisibility={changeVisibility}
            />

            <InputComponent
              title={"Ulangi Kata Sandi"}
              name="retypePassword"
              type={isVisible2 ? "text" : "password"}
              value={values.retypePassword}
              placeholder={"Masukkan kembali kata sandi"}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.retypePassword && !!touched.retypePassword}
              viewEyeIcon={true}
              eyeIcon={isVisible2}
              errorText={errors.retypePassword}
              togglePasswordVisibility={changeVisibility2}
            />

            <Form.Group className={`mb-3 `}>
              <Form.Check.Input
                required
                name="terms"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                className={` ${StyledCheckboxInput} `}
              />
              <Form.Check.Label className={`mx-2`} style={{ fontSize: "14px" }}>
                Saya setuju dengan syarat dan ketentuan
              </Form.Check.Label>
              <Form.Control.Feedback
                type="invalid"
                style={{ fontSize: "14px" }}
              >
                {errors.terms}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <PrimaryButton
                buttonText="Buat Akun"
                type="submit"
                disabled={!isValid || !dirty}
                isSubmitting={isSubmitting}
              />
            </Form.Group>
            <div className="mb-3">
              <HaveAccount
                href={"/auth/login"}
                text="Sudah memiliki akun?"
                linkText="Masuk di sini"
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default InputForm;
