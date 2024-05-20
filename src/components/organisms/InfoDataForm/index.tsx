import PersonalData from "binar/components/molecules/InformationForm/PersonalData";
import theme from "binar/constants";
import {
  styledForm,
  styledUnderlineText,
} from "binar/constants/emotion/DataForm.style";
import Image from "next/image";
import React from "react";

const InfoDataForm = () => {
  return (
    <div className="">
      <PersonalData />
      <button className={`${styledUnderlineText}`}>
        Lewati langkah ini
        <Image
          src={"/assets/icons/long-arrow-right.svg"}
          width={20}
          height={20}
          alt="arrow right"
          style={{ color: `${theme.colors.primary}` }}
        />
      </button>
    </div>
  );
};

export default InfoDataForm;
