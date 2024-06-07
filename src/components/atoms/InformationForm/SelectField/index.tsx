import React, { FocusEventHandler } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { StyledSelectInput } from "binar/styles/emotion/DataForm.style";
import { styledErrorText } from "binar/styles/emotion/FormControl.style";

interface Props {
  title: string;
  name: string;
  value: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: FocusEventHandler<HTMLInputElement> | undefined;
  isInvalid?: boolean;
  errorText?: string;
}

const SelectField: React.FC<Props> = ({
  title,
  name,
  placeholder,
  onChange,
  onBlur,
  value,

  isInvalid,

  errorText,
}) => {
  return (
    <>
      <Form.Group className="my-3">
        <Form.Label style={{ fontSize: "12px" }}>{title}</Form.Label>
        <InputGroup hasValidation>
          <Form.Select
            aria-label="Default select example"
            name={name}
            className={`${StyledSelectInput}`}
          >
            <option>{placeholder}</option>
            <option value="1">Pria</option>
            <option value="2">Wanita</option>
          </Form.Select>
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

export default SelectField;
