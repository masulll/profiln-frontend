import { css } from "@emotion/css";
import { Form, InputGroup, Button } from "react-bootstrap";
import Image from "next/image";
import Labels from "binar/components/atoms/labels";
import InputComponent from "binar/components/atoms/InputComponent";
import { useState, useCallback } from "react";

const InputLogin: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [password, setPassword] = useState("");

  const changeVisibility = useCallback(() => {
    setIsVisible((prevVisible) => !prevVisible);
  }, []);

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
      <InputGroup>
        <Labels title={"Masukkan Email Anda"} />
        <InputComponent type={"email"} placeHolder={"Masukkan email kamu"} />

        <Labels title={"Masukkan Password Anda"} />

        <InputComponent
          type={isVisible ? "text" : "password"}
          placeHolder={"Masukkan password kamu"}
        />
        <div className="position-relative">
          <Button
            type="button"
            className={`${IconStyling}`}
            onClick={changeVisibility}
          >
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
          </Button>
        </div>
      </InputGroup>
    </>
  );
};

export default InputLogin;
