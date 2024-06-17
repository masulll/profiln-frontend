import { ChangeEvent, useState } from "react";
import {
  StyledInputGroup,
  styledForm,
} from "binar/styles/emotion/DataForm.style";
import TitleForm from "binar/components/atoms/InformationForm";

import { OutlineButton, PrimaryButton } from "binar/components/atoms/Buttons";
import { Form } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import theme from "binar/constants";

interface Props {
  handleBack: (tab: string) => void;
  handleNext: (tab: string) => void;
}

const Skill: React.FC<Props> = ({ handleBack, handleNext }) => {
  const handleGoBack = () => {
    handleBack("tab5");
  };

  const handleNextForm = () => {
    handleNext("tab5");
  };

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

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

  // const handleChange = (
  //   option: readonly Option[],
  //   actionMeta: ActionMeta<Option>
  // ) => {};

  return (
    <>
      <div className={`${styledForm} `}>
        <TitleForm
          title={"Skill"}
          description="Beritahu kami kemampuan apa yang Anda kuasai agar profil Anda dapat menarik perhatian orang dengan beberapa kemampuan tersebut."
        />

        <Form>
          <Form.Label css={{ fontSize: "12px" }}>
            Tambahkan 3-10 skill yang Anda kuasai
          </Form.Label>
          <CreatableSelect
            isMulti
            options={options}
            styles={styledSelect}
            placeholder="Ketik skill"
            css={{ marginBottom: "2em" }}
          />
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
              type="button"
              width="111px"
              height="39px"
              css={{ marginRight: "0px", marginLeft: "24px" }}
              onClick={handleNextForm}
            />
          </div>
        </Form>
      </div>
    </>
  );
};

export default Skill;
