import React from "react";
import {
  boldDescription,
  styledForm,
} from "binar/styles/emotion/DataForm.style";
import TitleForm from "binar/components/atoms/InformationForm";
import InputField from "binar/components/atoms/InformationForm/InputField";
import PhoneNumInput from "binar/components/atoms/InformationForm/PhoneNumber";
import SelectField from "binar/components/atoms/InformationForm/SelectField";
import { PrimaryButton } from "binar/components/atoms/Buttons";
import { GENDER } from "binar/constants";
import { useAuth } from "binar/contexts/AuthContext";
import { TabContextProps } from "binar/types/types";
import { Formik, FormikHelpers } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import { postPersonalData } from "binar/endpoints";
import { useMutation } from "react-query";

const PersonalData: React.FC<TabContextProps> = ({ handleNext }) => {
  const { user } = useAuth();

  const mutation = useMutation(postPersonalData, {
    onSuccess: (data) => {
      console.log("Data submitted successfully", data);
      handleNext?.("tab1");
    },
    onError: (error) => {
      console.error("Error submitting personal data", error);
    },
  });

  const initialValues = {
    fullname: user?.fullname || "",
    email: user?.email || "",
    avatar_url: null as File | null,
    phone_number: "",
    gender: "",
  };

  const validationSchema = Yup.object({
    fullname: Yup.string().required("Nama lengkap diperlukan"),
    email: Yup.string().email("Email tidak valid").required("Email diperlukan"),
    avatar_url: Yup.mixed().required("Avatar diperlukan"),
    phone_number: Yup.string().required("Nomor telepon diperlukan"),
    gender: Yup.string().required("Jenis kelamin diperlukan"),
  });

  const handleSubmit = (
    values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>
  ) => {
    const formData = new FormData();

    formData.append("fullname", values.fullname);
    formData.append("email", values.email);
    if (values.avatar_url) {
      formData.append("avatar_url", values.avatar_url);
    }
    formData.append("phone_number", values.phone_number);
    formData.append("gender", values.gender);

    mutation.mutate(formData);

    setSubmitting(false);

    handleNext?.("tab1");
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          setFieldValue,
          errors,
          handleChange,
          values,
          touched,
          handleBlur,
          isValid,
          dirty,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className={`${styledForm} my-3 `}>
              <TitleForm
                title={"Pengisian Data Diri"}
                description="Yuk, mari isi formulir pengisian data diri untuk memulai pengalamanmu dengan kami."
              />
              <InputField
                title="Nama Lengkap"
                name="fullname"
                type="text"
                value={values.fullname}
                placeholder="Masukkan Nama Lengkap Anda"
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.fullname || !!touched.fullname}
                errorText={errors.fullname as string}
              />
              <InputField
                title="Email"
                name="email"
                type="text"
                value={values.email}
                placeholder=""
                disabled={true}
              />
              <PhoneNumInput
                value={values.phone_number}
                onChange={(value) => setFieldValue("phone_number", value)}
              />
              <SelectField
                title="Jenis Kelamin"
                name="gender"
                options={GENDER}
                placeholder="Pilih jenis kelamin"
                value={values.gender}
                onChange={handleChange}
              />
              <p className={`${boldDescription}`}>
                Ayo, tambahkan foto profil Anda untuk membuat profil Anda lebih
                menarik! Foto profil yang jelas dan representatif akan membantu
                pengguna lain mengenali Anda dengan lebih baik.
              </p>
              <div className="d-flex ">
                <Form.Group controlId="formFile" className="mb-3 ">
                  <Form.Label>Masukkan File Anda</Form.Label>
                  <Form.Control
                    name="avatar_url"
                    type="file"
                    css={{ width: "509px" }}
                    onChange={(event) => {
                      const target = event.currentTarget as HTMLInputElement;
                      if (target.files) {
                        setFieldValue("avatar_url", target.files[0]);
                      }
                    }}
                  />
                </Form.Group>
                <PrimaryButton
                  buttonText="Unggah"
                  width="20%"
                  height="39px"
                  css={{ marginTop: "30px", marginLeft: "auto" }}
                />
              </div>
              <p style={{ fontSize: "14px", fontWeight: "600" }}>
                Dukungan untuk JPG, PNG. Ukuran maksimal 2MB
              </p>
              <PrimaryButton
                buttonText="Lanjut"
                width="20%"
                height="39px"
                css={{ marginRight: "0px", marginLeft: "auto" }}
                type="submit"
                disabled={!isValid || !dirty}
                isSubmitting={isSubmitting}
              />
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PersonalData;
