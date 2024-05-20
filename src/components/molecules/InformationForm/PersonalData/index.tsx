import React, { useState } from "react";
import {
  boldDescription,
  styledForm,
} from "binar/constants/emotion/DataForm.style";
import TitleForm from "binar/components/atoms/InformationForm";
import InputField from "binar/components/atoms/InformationForm/InputField";
import PhoneNumInput from "binar/components/atoms/InformationForm/PhoneNumber";
import SelectField from "binar/components/atoms/InformationForm/SelectField";
import { PrimaryButton } from "binar/components/atoms/Buttons";

const PersonalData = () => {
  return (
    <>
      <div className={`${styledForm}`}>
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
        <div className="d-flex">
          <InputField
            title="Upload Foto Profile"
            name="profile_photo"
            value=""
            type="file"
            placeholder="Masukkan file anda"
          />
        </div>
      </div>
    </>
  );
};

export default PersonalData;
