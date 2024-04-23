import { css } from "@emotion/css";
import { Form } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";

import Labels from "binar/components/atoms/labels";
import { useState } from "react";

import InputComponent from "binar/components/atoms/InputComponent";

const InputLogin: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const changeVisibility = () => {
    setIsVisible((prevVisible) => !prevVisible);
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .min(10, "too short")
      .required("Email address is required."),
    password: Yup.string().required("This field is required"),
    terms: Yup.bool().required().oneOf([true], "Terms must be accepted"),
  });

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "", terms: false }}
        onSubmit={(values) => {
          console.log(values);
          sessionStorage.setItem("data", JSON.stringify(values));
        }}
        validationSchema={loginSchema}
      >
        {({ errors, touched, handleChange, values, handleSubmit }) => (
          <Form>
            <Labels title={"Masukkan Email Anda"} />

            <InputComponent
              name="email"
              type="email"
              value={values.email}
              placeholder={"Masukkan email kamu"}
              onChange={handleChange}
              isInvalid={!!errors.email}
              viewEyeIcon={false}
              errorText={errors.email}
            />

            <Labels title={"Masukkan Password Anda"} />
            <InputComponent
              name="password"
              type={isVisible ? "text" : "password"}
              value={values.password}
              placeholder={"Masukkan password kamu"}
              onChange={handleChange}
              isInvalid={!!errors.password}
              viewEyeIcon={true}
              eyeIcon={isVisible}
              errorText={errors.password}
              togglePasswordVisibility={changeVisibility}
            />

            <Form.Group className="mb-3">
              <Form.Check
                required
                name="terms"
                label="I agree to terms and conditions"
                onChange={handleChange}
                isInvalid={!!errors.terms}
                feedback={errors.terms}
                feedbackType="invalid"
              />
            </Form.Group>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default InputLogin;
