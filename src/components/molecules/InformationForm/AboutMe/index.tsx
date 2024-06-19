import React, { ChangeEvent, useState } from "react";
import {
  StyledInputGroup,
  styledForm,
} from "binar/styles/emotion/DataForm.style";
import TitleForm from "binar/components/atoms/InformationForm";
import { OutlineButton, PrimaryButton } from "binar/components/atoms/Buttons";
import { Form } from "react-bootstrap";

interface Props {
  handleBack: (tab: string) => void;
  handleNext: (tab: string) => void;
}

const AboutMe: React.FC<Props> = ({ handleBack, handleNext }) => {
  const [countWord, setCountWord] = useState(0);

  const handleGoBack = () => {
    handleBack("tab1");
  };

  const handleNextForm = () => {
    handleNext("tab2");
  };

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
              type="button"
              onClick={handleNextForm}
            />
          </div>
        </Form>
      </div>
    </>
  );
};

export default AboutMe;
