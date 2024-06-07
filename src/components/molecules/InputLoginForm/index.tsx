import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import InputComponent from "binar/components/atoms/InputComponent";
import {
  StyledCheckboxInput,
  styledErrorText,
  forgotPasswordStyle,
  styledWrappercheckbox,
} from "binar/styles/emotion/FormControl.style";
import Link from "next/link";
import { PrimaryButton } from "binar/components/atoms/Buttons";
import { HaveAccount } from "binar/components/atoms/FormFooter";
import { useRouter } from "next/router";
// import API from "binar/pages/api/v1";
import { loginUser } from "binar/pages/api/v1/login";
import { error } from "console";
import { AxiosError } from "axios";
import { signIn } from "next-auth/react";

const InputLoginForm: React.FC = () => {
  const [loginError, setLoginError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const router = useRouter();

  const changeVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  const loginSchema = Yup.object().shape({
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
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberUser: false,
        }}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const { email, password } = values;
            const response = await signIn("credentials", {
              redirect: false,
              email,
              password,
            });
            console.log("response", response);

            if (response?.status === 401) {
              resetForm();
              setLoginError("Email atau password salah");
            }
            if (response?.ok) {
              router.push({
                pathname: "/",
              });
            }
          } catch (error) {
            console.error(error);
          } finally {
            setSubmitting(false);
          }
        }}
        validationSchema={loginSchema}
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

            <InputComponent
              title={"Password"}
              name="password"
              type={isVisible ? "text" : "password"}
              value={values.password}
              placeholder={"Masukkan password anda"}
              onChange={handleChange}
              onBlur={handleBlur}
              isInvalid={!!errors.password && !!touched.password}
              viewEyeIcon={true}
              eyeIcon={isVisible}
              errorText={errors.password}
              togglePasswordVisibility={changeVisibility}
            />
            {loginError && <p className={`${styledErrorText}`}>{loginError}</p>}
            <div className={`${styledWrappercheckbox}`}>
              <Form.Group className={`mb-3 `}>
                <Form.Check.Input
                  name="rememberUser"
                  onChange={handleChange}
                  className={` ${StyledCheckboxInput} `}
                />
                <Form.Check.Label
                  className={`mx-2`}
                  style={{ fontSize: "14px" }}
                >
                  Ingat saya
                </Form.Check.Label>
              </Form.Group>
              <Link href={"/auth/forget"} className={`${forgotPasswordStyle}`}>
                <p>Lupa Password</p>
              </Link>
            </div>

            <Form.Group>
              <PrimaryButton
                buttonText="Login"
                type="submit"
                disabled={!isValid || !dirty}
                isSubmitting={isSubmitting}
              />
            </Form.Group>
            <div className="mb-3">
              <HaveAccount
                href={"/auth/register"}
                text="Belum memiliki akun?"
                linkText="Daftar di sini"
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default InputLoginForm;
