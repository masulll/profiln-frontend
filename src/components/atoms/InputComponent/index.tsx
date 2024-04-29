import { css } from "@emotion/css";
import { InputGroup, Form, Button } from "react-bootstrap";
import {
  StyledInputGroup,
  Wrapper,
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
  const IconStyling = css`
    display: inline-block;
    vertical-align: middle;
    position: absolute;
    right: 10px;
    top: 13px;
    cursor: pointer;
    background: transparent;
    z-index: 100;
  `;

  return (
    <>
      <Form.Group className="mb-3  ">
        <Labels title={title} />

        <div className={`${Wrapper}`}>
          <InputGroup hasValidation>
            <Form.Control
              name={name}
              type={type}
              placeholder={placeholder}
              onChange={onChange}
              value={value}
              isInvalid={isInvalid}
              className={`${StyledInputGroup} 
                
              }`}
            />

            {viewEyeIcon && (
              <div
                role="button"
                className={``}
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
                  className={`${IconStyling}`}
                />
              </div>
            )}

            <Form.Control.Feedback
              type="invalid"
              className={` ${styledErrorText} background-image-none`}
            >
              {errorText}
            </Form.Control.Feedback>
          </InputGroup>
        </div>
      </Form.Group>
    </>
  );
};

export default InputComponent;
