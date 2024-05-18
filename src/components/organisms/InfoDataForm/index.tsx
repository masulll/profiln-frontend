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
      <div className={`${styledForm}`}>
        <h1>Pengalaman kerja</h1>
        <p>
          Mari ceritakan tentang pekerjaan Anda! Bagikan pengalaman, pencapaian,
          dan tanggung jawab Anda di posisi tersebut. Semua informasi ini akan
          membantu membuat profil Anda lebih menarik dan informatif.
        </p>
      </div>
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
