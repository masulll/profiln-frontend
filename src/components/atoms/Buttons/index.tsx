import { css } from "@emotion/react";
import { cx } from "@emotion/css";
import styled from "@emotion/styled";
import {
  StyledOutlineButton,
  StyledPillButton,
  activePillButton,
} from "binar/styles/emotion/Button.style";
import { CustomButtonPrimary } from "binar/styles/emotion/Button.style";
import { CustomButtonWithIcon } from "binar/styles/emotion/Button.style";
import Image from "next/image";
import { Button } from "react-bootstrap";
import { ThreeDots } from "react-loader-spinner";
import theme from "binar/constants";
import { styledIconDefault } from "binar/styles/emotion/Link.style";
interface Props {
  buttonText: string;
  buttonIcon?: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  active?: boolean;
  isSubmitting?: boolean;
  isCount?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  iconSrc?: string;
  iconSrcActive?: string;
  width?: string | undefined;
  height?: string | undefined;
  padding?: string | undefined;
  className?: string;
}

const PrimaryButton: React.FC<Props> = ({
  buttonText,
  type,
  disabled,
  isSubmitting = false,
  width,
  height,
  padding,
  className,
}) => {
  return (
    <>
      <Button
        className={` ${className}`}
        css={CustomButtonPrimary({ padding, width, height })}
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

const ButtonWithIcon: React.FC<Props> = ({
  buttonText,
  buttonIcon,
  onClick,
}) => {
  return (
    <>
      <Button css={CustomButtonWithIcon} onClick={onClick}>
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
  padding,
  width,
  height,
}) => {
  return (
    <>
      <Button
        css={StyledOutlineButton({ padding, width, height })}
        type={type}
        disabled={disabled}
      >
        {buttonText}
      </Button>
    </>
  );
};

const PillButton: React.FC<Props> = ({ buttonText, type, active, onClick }) => {
  return (
    <>
      <Button
        // className={cx(StyledPillButton, { [activePillButton]: active })}
        css={[StyledPillButton, active && activePillButton]}
        type={type}
        active={active}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </>
  );
};

const SmallButton = styled(Button)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.colors.primary,
  fontFamily: theme.fonts.utility,
  color: "white",
  fontSize: "1rem",
  fontWeight: "500",
  borderRadius: "0.25rem",
  textAlign: "center",

  border: "none",
  "&:disabled": {
    backgroundColor: theme.neutral_colors.grayscale_50,
  },
  "&:hover": {
    backgroundColor: theme.colors.primary,
  },
  "&:active": {
    backgroundColor: `${theme.colors.primary} !important`,
    opacity: "0.9",
  },
  "&:focus": {
    backgroundColor: `${theme.colors.primary} `,
    color: "white",
    borderColor: theme.colors.primary,
    outline: "0",
  },
});

const IconCountButton: React.FC<Props> = ({
  isCount,
  buttonText,
  iconSrc,
  iconSrcActive,
}) => {
  return (
    <button className={`${styledIconDefault} `}>
      <Image
        src={`${iconSrc}`}
        width={28}
        height={28}
        alt={buttonText}
        style={{ fill: "#933393" }}
      />

      <p
        style={{
          fontSize: "18px",
          color: theme.neutral_colors.grayscale_70,
        }}
      >
        {isCount ? "0" : `${buttonText}`}
      </p>
    </button>
  );
};

export {
  PrimaryButton,
  ButtonWithIcon,
  OutlineButton,
  PillButton,
  SmallButton,
  IconCountButton,
};
