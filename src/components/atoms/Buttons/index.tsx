import { css } from "@emotion/css";
import { StyledOutlineButton } from "binar/constants/emotion/Button.style";
import {
  CustomButtonPrimary,
  CustomButtonWithIcon,
} from "binar/constants/emotion/FormControl.style";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { ThreeDots } from "react-loader-spinner";

interface Props {
  buttonText: string;
  buttonIcon?: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  isSubmitting?: boolean;
  onClick?: React.MouseEventHandler;
}

const PrimaryButton: React.FC<Props> = ({
  buttonText,
  type,
  disabled,
  isSubmitting = false,
}) => {
  const StyledButton = css`
    ${CustomButtonPrimary}
  `;

  return (
    <>
      <Button className={`${StyledButton}`} type={type} disabled={disabled}>
        {isSubmitting ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ThreeDots
              visible={true}
              height="50"
              width="50"
              color="#fff"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          buttonText
        )}
      </Button>
    </>
  );
};

const ButtonWithIcon: React.FC<Props> = ({
  buttonText,
  buttonIcon,
  onClick,
}) => {
  const StyledButtonWithIcon = css`
    ${CustomButtonWithIcon}
  `;

  return (
    <>
      <Button className={`${StyledButtonWithIcon}`} onClick={onClick}>
        <span>
          <Image
            src={`${buttonIcon}`}
            alt="Button Icon"
            width={18}
            height={18}
          />
        </span>
        {buttonText}
      </Button>
    </>
  );
};

const OutlineButton: React.FC<Props> = ({
  buttonText,
  type,
  disabled,
  isSubmitting = false,
}) => {
  const StyledButton = css`
    ${CustomButtonPrimary}
  `;

  return (
    <>
      <Button
        className={`${StyledOutlineButton}`}
        type={type}
        disabled={disabled}
      >
        {isSubmitting ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ThreeDots
              visible={true}
              height="50"
              width="50"
              color="#fff"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          buttonText
        )}
      </Button>
    </>
  );
};

export { PrimaryButton, ButtonWithIcon, OutlineButton };
