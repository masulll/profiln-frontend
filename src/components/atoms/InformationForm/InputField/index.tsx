import React, { FocusEventHandler } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { StyledInputGroup } from "binar/styles/emotion/DataForm.style";
import { styledErrorText } from "binar/styles/emotion/FormControl.style";

interface Props {
  title: string;
  name: string;
  type: string;
  value: string | number;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  isInvalid?: boolean;
  errorText?: string;
  className?: string;
}

const InputField: React.FC<Props> = ({
  title,
  name,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  isInvalid,
  errorText,
  className,
}) => {
  return (
    <>
      <Form.Group className="mb-3">
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
            className={`${StyledInputGroup} ${className} `}
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
