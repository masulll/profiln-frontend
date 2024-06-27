import React, { ChangeEvent, useState } from "react";
import {
  StyledInputGroup,
  styledForm,
} from "binar/styles/emotion/DataForm.style";
import TitleForm from "binar/components/atoms/InformationForm";
import { OutlineButton, PrimaryButton } from "binar/components/atoms/Buttons";
import { Form } from "react-bootstrap";
import { Formik, FormikHelpers } from "formik";
import { postAbout } from "binar/endpoints";
import { useMutation, useQueryClient } from "react-query";

interface Props {
  handleBack: (tab: string) => void;
  handleNext: (tab: string) => void;
}

const AboutMe: React.FC<Props> = ({ handleBack, handleNext }) => {
  const [countWord, setCountWord] = useState(0);
  const queryClient = useQueryClient();

  const handleGoBack = () => {
    handleBack("tab1");
  };

  const handleTextAreaChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
    setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void
  ): void => {
    const { value } = event.target;
    const count = value.length;
    setCountWord(count);
    setFieldValue("about", value);
  };

  const initialValues = {
    about: "",
  };

  const mutation = useMutation(postAbout, {
    onSuccess: (data) => {
      console.log("Data submitted successfully", data);
      // Simpan data ke cache React Query (opsional)
      queryClient.setQueryData("aboutData", data);
      handleNext?.("tab2");
    },
    onError: (error) => {
      console.error("Error submitting about data", error);
    },
  });

  const handleSubmit = (
    values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>
  ) => {
    mutation.mutate(values);

    setSubmitting(false);

    handleNext?.("tab2");
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={handleSubmit}
      >
        {({
          handleSubmit,
          values,
          touched,
          handleBlur,
          isValid,
          dirty,
          isSubmitting,
          setFieldValue,
        }) => (
          <div className={`${styledForm} `}>
            <TitleForm
              title={"Tentang Saya"}
              description="Yuk, ceritakan tentang dirimu dengan fokus pada pengalaman, industri, atau keterampilan yang telah kamu kembangkan selama bertahun-tahun."
            />
            <Form onSubmit={handleSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label css={{ fontWeight: "600" }}>
                  Tentang Saya
                </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Silakan ceritakan tentang dirimu"
                  name={"about"}
                  className={`${StyledInputGroup}`}
                  value={values.about}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    handleTextAreaChange(e, setFieldValue)
                  }
                />
                <p css={{ textAlign: "right" }}>{countWord}/2500</p>
              </Form.Group>
              <div className="d-flex">
                <OutlineButton
                  buttonText="Kembali"
                  type="button"
                  width="111px"
                  height="39px"
                  onClick={handleGoBack}
                />

                <PrimaryButton
                  buttonText="Lanjut"
                  width="111px"
                  height="39px"
                  css={{ marginRight: "0px", marginLeft: "24px" }}
                  disabled={countWord > 0 && countWord < 2500 ? false : true}
                  type="submit"
                  isSubmitting={isSubmitting}
                />
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default AboutMe;
