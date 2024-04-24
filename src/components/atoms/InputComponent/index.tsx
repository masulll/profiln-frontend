import { css } from "@emotion/css";
import { InputGroup, Form, Button } from "react-bootstrap";
import {
  StyledInputGroup,
  Wrapper,
  styledFormGroup,
  styledErrorText,
} from "binar/constants/emotion/FormControl.style";
import Image from "next/image";
import Labels from "../labels";
interface Props {
  title: string;
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
  title,
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
    ${StyledInputGroup};
  `;

  const IconStyling = css`
    position: absolute;

    bottom: 0.5rem;
    left: 27rem;

    border: none;
    background: transparent;
    cursor: pointer;
  `;

  return (
    <>
      <Form.Group className={`${styledFormGroup}`}>
        <InputGroup hasValidation>
          <Labels title={title} />
          <div className={`${Wrapper}`}>
            <Form.Control
              name={name}
              type={type}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              className={`${StyledForm}`}
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

          <Form.Control.Feedback
            type="invalid"
            className={` ${styledErrorText}`}
          >
            {errorText}
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </>
  );
};

export default InputComponent;
