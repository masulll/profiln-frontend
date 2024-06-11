import React, { useState } from "react";
import {
  StyledInputGroup,
  boldDescription,
  styledForm,
} from "binar/styles/emotion/DataForm.style";
import TitleForm from "binar/components/atoms/InformationForm";
import InputField from "binar/components/atoms/InformationForm/InputField";

import SelectField from "binar/components/atoms/InformationForm/SelectField";
import { PrimaryButton } from "binar/components/atoms/Buttons";
import { Form } from "react-bootstrap";

const WorkHistory = () => {
  return (
    <>
      <div className={`${styledForm} `}>
        <TitleForm
          title={"Pengisian Data Diri"}
          description="Yuk, mari isi formulir pengisian data diri untuk memulai pengalamanmu
        dengan kami."
        />
        <Form>
          <InputField
            title="Nama Perkerjaan Anda"
            name="jobtitle"
            type="text"
            value=""
            placeholder=""
          />

          <SelectField
            title="Jenis Kelamin"
            name="gender"
            placeholder="Pilih jenis kelamin"
            value=" "
          />
          <p className={`${boldDescription}`}>
            Ayo, tambahkan foto profil Anda untuk membuat profil Anda lebih
            menarik! Foto profil yang jelas dan representatif akan membantu
            pengguna lain mengenali Anda dengan lebih baik.
          </p>
          <div className="d-flex ">
            <Form.Group controlId="formFile" className="mb-3 ">
              <Form.Label css={{ fontSize: "12px" }}>
                Masukkan File Anda
              </Form.Label>
              <Form.Control
                type="file"
                className={`${StyledInputGroup}`}
                css={{ width: "509px" }}
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
          />
        </Form>
      </div>
    </>
  );
};

export default WorkHistory;
