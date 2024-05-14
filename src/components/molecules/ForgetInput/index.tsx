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

const ForgetInput: React.FC = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const router = useRouter();

  const forgetSchema = Yup.object().shape({
    email: Yup.string()
      .email("Maaf penulisan email belum tepat. Misal: name@email.com")
      .min(10, "email minimal 10 karakter")
      .required("Anda belum mengisi email"),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
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
        validationSchema={forgetSchema}
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
                  title="Reset Password"
                  wording={
                    <>
                      Tautan pengaturan ulang kata sandi telah dikirimkan ke
                      email <strong>{values.email}</strong>. Periksa inbox Anda
                      sekarang untuk melanjutkan.
                    </>
                  }
                />
                <Link
                  href={`https://mail.google.com/mail/u/0/#inbox`}
                  target="blank"
                  className={`${StyledResetLink}`}
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Cek Email
                </Link>
              </>
            ) : (
              <>
                <FormTitle
                  title="Cek Email Anda"
                  wording="Lupa password? Jangan khawatir, kami siap membantu Anda mengatasi masalah ini."
                />
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

export default ForgetInput;
