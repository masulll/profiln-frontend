import { css } from "@emotion/css";
import {
  CustomButtonPrimary,
  CustomButtonWithIcon,
} from "binar/constants/emotion/FormControl.style";
import Image from "next/image";
import { Button } from "react-bootstrap";

interface Props {
  buttonText: string;
  buttonIcon?: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
}

const PrimaryButton: React.FC<Props> = ({ buttonText, type, disabled }) => {
  const StyledButton = css`
    ${CustomButtonPrimary}
  `;

  return (
    <>
      <Button className={`${StyledButton}`} type={type} disabled={disabled}>
        {buttonText}
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

export { PrimaryButton, ButtonWithIcon };
