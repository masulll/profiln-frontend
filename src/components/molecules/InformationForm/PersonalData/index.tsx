import React, { useState } from "react";
import {
  boldDescription,
  styledForm,
} from "binar/styles/emotion/DataForm.style";
import TitleForm from "binar/components/atoms/InformationForm";
import InputField from "binar/components/atoms/InformationForm/InputField";
import PhoneNumInput from "binar/components/atoms/InformationForm/PhoneNumber";
import SelectField from "binar/components/atoms/InformationForm/SelectField";
import { PrimaryButton } from "binar/components/atoms/Buttons";
import { Form } from "react-bootstrap";

const PersonalData = () => {
  return (
    <>
      <div className={`${styledForm} `}>
        <TitleForm
          title={"Pengisian Data Diri"}
          description="Yuk, mari isi formulir pengisian data diri untuk memulai pengalamanmu
        dengan kami."
        />
        <InputField
          title="Nama Lengkap"
          name="fullname"
          type="text"
          value=""
          placeholder=""
        />
        <InputField
          title="Email"
          name="email"
          type="text"
          value=""
          placeholder=""
        />
        <PhoneNumInput />
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
            <Form.Label>Masukkan File Anda</Form.Label>
            <Form.Control type="file" css={{ width: "509px" }} />
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
      </div>
    </>
  );
};

export default PersonalData;
