import React, { ChangeEvent, useState } from "react";
import {
  StyledInputGroup,
  boldDescription,
  styledForm,
} from "binar/styles/emotion/DataForm.style";
import TitleForm from "binar/components/atoms/InformationForm";
import InputField from "binar/components/atoms/InformationForm/InputField";
import PhoneNumInput from "binar/components/atoms/InformationForm/PhoneNumber";
import SelectField from "binar/components/atoms/InformationForm/SelectField";
import { OutlineButton, PrimaryButton } from "binar/components/atoms/Buttons";
import { Form } from "react-bootstrap";
import { StyledPillButton } from "binar/styles/emotion/Button.style";

const AboutMe = () => {
  const [countWord, setCountWord] = useState(0);

  const handleTextAreaChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const count = event.target.value.length;
    setCountWord(count);
  };

  return (
    <>
      <div className={`${styledForm} `}>
        <TitleForm
          title={"Tentang Saya"}
          description="Yuk, ceritakan tentang dirimu dengan fokus pada pengalaman, industri, atau keterampilan yang telah kamu kembangkan selama bertahun-tahun."
        />
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label css={{ fontWeight: "600" }}>Tentang Saya</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Silakan ceritakan tentang dirimu"
              className={`${StyledInputGroup}`}
              onChange={handleTextAreaChange}
            />
            <p css={{ textAlign: "right" }}>{countWord}/2500</p>
          </Form.Group>
          <div className="d-flex">
            <OutlineButton buttonText="Kembali" width="111px" height="39px" />

            <PrimaryButton
              buttonText="Lanjut"
              width="111px"
              height="39px"
              css={{ marginRight: "0px", marginLeft: "24px" }}
              disabled={countWord > 0 ? false : true}
            />
          </div>
        </Form>
      </div>
    </>
  );
};

export default AboutMe;
