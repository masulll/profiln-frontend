import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { InputGroup, Form, Button } from "react-bootstrap";
import { StyledFormControl } from "binar/constants/emotion/FormControl.style";
import Image from "next/image";

interface Props {
  name: string;
  type: string;
  value: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  viewEyeIcon?: boolean;
  isInvalid?: boolean;
  togglePasswordVisibility?: () => void;
  eyeIcon?: boolean;
  errorText?: string;
}

const InputComponent: React.FC<Props> = ({
  name,
  type,
  placeholder,
  onChange,
  value,
  viewEyeIcon,
  isInvalid,
  togglePasswordVisibility,
  eyeIcon,
  errorText,
}) => {
  const StyledForm = css`
    ${StyledFormControl};
  `;

  const IconStyling = css`
    position: absolute;
    top: 13.6%;
    left: 30%;
    border: none;
    background: transparent;
    cursor: pointer;
  `;

  return (
    <>
      <Form.Group>
        <InputGroup hasValidation>
          <div className="position-relative">
            <Form.Control
              name={name}
              type={type}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              className={`${StyledForm} position-relative `}
            />
            {viewEyeIcon && (
              <Button
                type="button"
                className={`${IconStyling} as string`}
                onClick={togglePasswordVisibility}
              >
                <Image
                  src={
                    eyeIcon
                      ? `assets/icons/Eye-visible.svg`
                      : `assets/icons/Eye-invisible.svg`
                  }
                  width={24}
                  height={24}
                  alt=""
                />
              </Button>
            )}
          </div>

          <Form.Control.Feedback type="invalid">
            {errorText}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};

export default InputComponent;
