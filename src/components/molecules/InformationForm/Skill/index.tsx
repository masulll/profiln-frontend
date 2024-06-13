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

const Skill = () => {
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
            <OutlineButton buttonText="Kembali" width="111px" height="39px" />

            <PrimaryButton
              buttonText="Lanjut"
              width="111px"
              height="39px"
              css={{ marginRight: "0px", marginLeft: "24px" }}
            />
          </div>
        </Form>
      </div>
    </>
  );
};

export default Skill;
