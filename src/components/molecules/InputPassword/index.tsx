import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { Form } from "react-bootstrap";
import theme from "binar/constants";
import { string } from "yup";
import Image from "next/image";
import Labels from "binar/components/atoms/labels";
import InputComponent from "binar/components/atoms/InputComponent";
import { types } from "util";
import { useState } from "react";

interface Props {
  placeHolder: string;
  title: string;
  types: string;
}
const InputPassword: React.FC<Props> = ({ types, title, placeHolder }) => {
  const [isVisible, setIsVisible] = useState(false);

  const visibility = () => {
    setIsVisible(!isVisible);
  };

  const IconStyling = css`
    position: absolute;
    top: 14%;
    left: 30%;
    border: none;
    background: transparent;
    cursor: pointer;
  `;
  return (
    <>
      <div className="position-relative">
        <Labels title={title} />

        <InputComponent
          types={isVisible ? "text" : "password"}
          placeHolder={placeHolder}
        />
        <button className={`${IconStyling}`} onClick={visibility}>
          <Image
            src={
              isVisible
                ? `assets/icons/Eye-visible.svg`
                : `assets/icons/Eye-invisible.svg`
            }
            width={24}
            height={24}
            alt=""
          />
        </button>
      </div>
    </>
  );
};

export default InputPassword;
