import React, { FocusEventHandler } from "react";
import { css } from "@emotion/css";
import { InputGroup, Form, Button } from "react-bootstrap";
import { StyledInputGroup } from "binar/constants/emotion/DataForm.style";
import {
  Wrapper,
  styledErrorText,
  IconStyling,
} from "binar/constants/emotion/FormControl.style";
import Image from "next/image";
import Labels from "binar/components/atoms/labels";
interface Props {
  title: string;
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;

  viewEyeIcon?: boolean;
  isInvalid?: boolean;
  togglePasswordVisibility?: () => void;
  eyeIcon?: boolean;
  errorText?: string;
}

const InputField: React.FC<Props> = ({
  title,
  name,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  viewEyeIcon,
  isInvalid,
  togglePasswordVisibility,
  eyeIcon,
  errorText,
}) => {
  return (
    <>
      <Form.Group className="mb-3  ">
        <Form.Label style={{ fontSize: "12px" }}>{title}</Form.Label>
        <InputGroup hasValidation>
          <Form.Control
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            isInvalid={isInvalid}
            className={`${StyledInputGroup} `}
          />

          <Form.Control.Feedback
            type="invalid"
            className={` ${styledErrorText} background-image-none`}
          >
            {errorText}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};

export default InputField;
