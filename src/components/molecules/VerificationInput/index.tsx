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

const VerificationInput: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  const changeVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  const changeVisibility2 = () => {
    setIsVisible2((prevVisible) => !prevVisible);
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .min(10, "too short")
      .required("Email address is required."),
    password: Yup.string()
      .required("This field is required")
      .min(8, " password is at least 8 characters ")
      .matches(
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
        "Password must contain at least one special character"
      ),
    retypePassword: Yup.string()
      .required("This field is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),

    nama: Yup.string().required("This field is required"),
    terms: Yup.bool().required().oneOf([true], " "),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          nama: "",
          password: "",
          retypePassword: "",
          terms: false,
        }}
        onSubmit={(values) => {
          console.log(values);
          sessionStorage.setItem("data", JSON.stringify(values));
        }}
        validationSchema={loginSchema}
      >
        {({ errors, touched, handleChange, values, handleSubmit, isValid }) => (
          <Form>
            <InputComponent
              title="Email Kamu"
              name="email"
              type="email"
              value={values.email}
              placeholder={"Masukkan email kamu"}
              onChange={handleChange}
              isInvalid={!!errors.email || !!touched.email}
              viewEyeIcon={false}
              errorText={errors.email}
            />

            <PrimaryButton buttonText="Buat Akun" type="submit" />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default VerificationInput;
