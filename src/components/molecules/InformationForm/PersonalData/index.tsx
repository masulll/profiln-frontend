import React from "react";
import { styledForm } from "binar/constants/emotion/DataForm.style";
import TitleForm from "binar/components/atoms/InformationForm";
import InputField from "binar/components/atoms/InformationForm/InputField";

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
      </div>
    </>
  );
};

export default PersonalData;
