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

const InputForm: React.FC = () => {
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
    <div>
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
        {({ errors, touched, handleChange, values, handleSubmit }) => (
          <Form>
            <InputComponent
              title="Email Kamu"
              name="email"
              type="email"
              value={values.email}
              placeholder={"Masukkan email kamu"}
              onChange={handleChange}
              isInvalid={!!errors.email}
              viewEyeIcon={false}
              errorText={errors.email}
            />

            <InputComponent
              title={"Nama Lengkap Kamu"}
              name="nama"
              type={"text"}
              value={values.nama}
              placeholder={"Masukkan nama lengkap kamu"}
              onChange={handleChange}
              isInvalid={!!errors.nama}
              errorText={errors.nama}
            />

            <InputComponent
              title={"Kata Sandi Kamu"}
              name="password"
              type={isVisible ? "text" : "password"}
              value={values.password}
              placeholder={"Masukkan kata sandi kamu"}
              onChange={handleChange}
              isInvalid={!!errors.password}
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
              isInvalid={!!errors.retypePassword}
              viewEyeIcon={true}
              eyeIcon={isVisible2}
              errorText={errors.retypePassword}
              togglePasswordVisibility={changeVisibility2}
            />

            <Form.Group className={``}>
              <Form.Check.Input
                required
                name="terms"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                className={` ${StyledCheckboxInput}`}
              />
              <Form.Check.Label
                className={errors.terms ? `${styledErrorText}` : ``}
              >
                Saya setuju dengan syarat dan ketentuan
              </Form.Check.Label>
              <Form.Control.Feedback
                type="invalid"
                className={`${styledErrorText}`}
              >
                {errors.terms}
              </Form.Control.Feedback>
            </Form.Group>
            <PrimaryButton buttonText="Buat Akun" />
            <HaveAccount />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InputForm;