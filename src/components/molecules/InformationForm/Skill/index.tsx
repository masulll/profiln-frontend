import { ChangeEvent, useState } from "react";
import {
  StyledInputGroup,
  styledForm,
} from "binar/styles/emotion/DataForm.style";
import TitleForm from "binar/components/atoms/InformationForm";
import useSkills from "binar/endpoints/apiOthers";
import { useMutation } from "react-query";
import { OutlineButton, PrimaryButton } from "binar/components/atoms/Buttons";

import CreatableSelect from "react-select/creatable";
import theme from "binar/constants";
import { Formik, FormikHelpers } from "formik";
import { Form } from "react-bootstrap";
import * as Yup from "yup";
interface Props {
  handleBack: (tab: string) => void;
  handleNext: (tab: string) => void;
}

interface Skill {
  value: string;
  label: string;
}

const Skill: React.FC<Props> = ({ handleBack, handleNext }) => {
  const { data: skillsData, isLoading, isError } = useSkills();

  const initialValues = {
    skills: [] as Skill[],
  };

  const handleGoBack = () => {
    handleBack("tab5");
  };

  const handleNextForm = () => {
    handleNext("tab5");
  };

  const options =
    skillsData?.map((skill: any) => ({
      value: skill.id,
      label: skill.name,
    })) || [];

  const styledSelect = {
    control: (provided: any, state: any) => ({
      ...provided,

      borderColor: state.isFocused
        ? theme.colors.primary
        : provided.borderColor,
      boxShadow: state.isFocused ? "none" : provided.boxShadow,
      "&:hover": {
        borderColor: state.isFocused
          ? theme.colors.primary
          : provided.borderColor,
      },
    }),
    // option: (styles: any) => ({
    //   ...styles,

    // }),
    multiValue: (styles: any) => ({
      ...styles,
      backgroundColor: theme.colors.primary,
      borderRadius: "14px",
      color: theme.text_colors.white,
    }),
    multiValueLabel: (styles: any) => ({
      ...styles,
      color: theme.text_colors.white,
    }),
    multiValueRemove: (styles: any) => ({
      ...styles,
      cursor: "pointer",
      ":hover": {
        color: theme.text_colors.white,
      },
    }),
  };

  const handleSubmit = (
    values: typeof initialValues,
    { setSubmitting }: FormikHelpers<typeof initialValues>
  ) => {
    console.log(values); // Untuk melihat data yang dikirim
    setSubmitting(false);
  };
  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({
          handleSubmit,
          setFieldValue,
          values,
          touched,
          errors,
          isValid,
          dirty,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className={`${styledForm} `}>
              <TitleForm
                title={"Skill"}
                description="Beritahu kami kemampuan apa yang Anda kuasai agar profil Anda dapat menarik perhatian orang dengan beberapa kemampuan tersebut."
              />

              <Form.Label css={{ fontSize: "12px" }}>
                Tambahkan 3-10 skill yang Anda kuasai
              </Form.Label>
              <CreatableSelect
                isMulti
                options={options}
                styles={styledSelect}
                placeholder="Ketik skill"
                name="skills"
                value={values.skills}
                onChange={(selectedOptions) => {
                  setFieldValue("skills", selectedOptions);
                }}
                css={{ marginBottom: "2em" }}
              />
              {touched.skills && errors.skills && (
                <div style={{ color: "red" }}>{errors.skills as string}</div>
              )}
              <div className="d-flex">
                <OutlineButton
                  type="button"
                  buttonText="Kembali"
                  width="111px"
                  height="39px"
                  onClick={handleGoBack}
                />
                <PrimaryButton
                  buttonText="Selesai"
                  type="submit"
                  width="111px"
                  height="39px"
                  css={{ marginRight: "0px", marginLeft: "24px" }}
                  onClick={handleNextForm}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Skill;
