import React from "react";
import { styledForm } from "binar/constants/emotion/DataForm.style";
import InputComponent from "binar/components/atoms/InputComponent";

const PersonalData = () => {
  return (
    <>
      <div className={`${styledForm}`}>
        <h2>Pengisian Data Diri</h2>
        <p>
          Yuk, mari isi formulir pengisian data diri untuk memulai pengalamanmu
          dengan kami.
        </p>
      </div>
    </>
  );
};

export default PersonalData;
