import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import InputComponent from "binar/components/atoms/InputComponent";
import FormTitle from "binar/components/molecules/FormTitle";
import { PrimaryButton } from "binar/components/atoms/Buttons";
import { HaveAccount } from "binar/components/atoms/FormFooter";
import { useRouter } from "next/router";
// import API from "binar/pages/api/v1";
import { registerUser } from "binar/pages/api/v1/register";
import { error } from "console";
import Link from "next/link";
import { StyledResetLink } from "binar/constants/emotion/FormControl.style";

const ResetPassInput: React.FC = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
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
            // const response = await registerUser({ email, password });
            // console.log("response", response);
            // if (response.status.is_success === true) {
            //   router.push({
            //     pathname: "/auth/register/forget",
            //     query: { email: values.email },
            //   });
            // }
            // if (values.email !== "") {
            //   router.push({
            //     pathname: "/auth/register/forget",
            //     query: { email: values.email },
            //   });
            // }
            setIsSubmit(true);
          } catch (error) {
            console.error(error);
          } finally {
            setSubmitting(false);
          }
        }}
        validationSchema={resetSchema}
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
                <InputComponent
                  title={"Masukkan Password Baru Anda"}
                  name="password"
                  type={isVisible ? "text" : "password"}
                  value={values.password}
                  placeholder={"Masukkan password baru anda"}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={!!errors.password && !!touched.password}
                  viewEyeIcon={true}
                  eyeIcon={isVisible}
                  errorText={errors.password}
                  togglePasswordVisibility={changeVisibility}
                />

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
