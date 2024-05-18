import { css } from "@emotion/css";
import theme from "binar/constants";
import { Open_Sans } from "next/font/google";

export const StyledInputGroup = css`
  font-family: ${theme.fonts.body};

  background-image: none !important;

  .form-control&:focus {
    border: none;
    outline: 0;
    border-color: ${theme.colors.primary};
    box-shadow: 0 0 0 1px ${theme.colors.primary};
  }

  font-size: 16px;
  line-height: 20px;
  padding: 10px;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
`;

export const CustomButtonPrimary = css`
  background-color: ${theme.colors.primary};
  font-family: ${theme.fonts.utility};

  &:disabled {
    background-color: ${theme.neutral_colors.grayscale_50};
  }
  &:hover {
    background-color: ${theme.colors.primary};
  }
  &:active {
    background-color: ${theme.colors.primary} !important;
    opacity: 0.8;
  }
  color: white;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 0.25rem;
  text-align: center;
  width: 100%;
  height: 3.25rem;
  border: none;
`;

export const StyledResetLink = css`
  background-color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};

  &:disabled {
    background-color: ${theme.neutral_colors.grayscale_50};
  }
  &:hover {
    background-color: ${theme.colors.primary};
  }
  display: flex;
  color: white;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 0.25rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.25rem;
  border: none;
`;

export const CustomButtonWithIcon = css`
  background: #4285f4;
  width: 100%;
  height: 3.25rem;
  border: none;
  border-radius: 0.25rem;
  border: none;
  font-family: ${theme.fonts.utility};
  color: ${theme.text_colors.white};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const styledWrappercheckbox = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});
export const forgotPasswordStyle = css`
  color: ${theme.text_colors.primary};
  font-size: 14px;
  font-weight: 700;
  line-height: normal;
  text-decoration: none;
`;

export const TextFooterForm = css`
  color: ${theme.neutral_colors.grayscale_80};

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
  margin: 30px 40px;
`;
export const FooterLinkForm = css`
  color: ${theme.text_colors.primary};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 4px;
`;

export const styledForm = css({
  padding: "20px 20px",

  minWidth: "560px",
  maxHeight: "700px",
  borderRadius: "1.3125rem",
  background: "#fff",
  boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)",

  "@media screen and (max-width:1199px)": {
    width: "auto",
    maxHeight: "fit-content",
  },
  "@media screen and (max-width:550px)": {
    maxWidth: "550px",
  },
  "@media screen and (max-width:327px)": {
    maxWidth: "327px",
  },
});

export const styledFormLayout = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: 0,
  paddingRight: 0,

  "@media screen and (max-width:1199px)": {
    columns: "auto",
    minHeight: "100vh",
  },
});

export const Wrapper = css`
  position: relative;
`;

export const StyledCheckboxInput = css`
  border-radius: 4px;
  background: ${theme.neutral_colors};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);

  .form-check-input&:checked {
    background-color: ${theme.colors.primary};
  }
`;

export const styledErrorText = css({
  fontSize: "14px",
  color: `${theme.colors.error}`,
});

export const OrWithLineStyle = css`
  display: flex;
  align-items: center;
  background-color: ${theme.neutral_colors.grayscale_60};
  height: 1px;
  width: 100%;
  margin: 20px 0;
`;

export const OrTextStyle = css`
  color: ${theme.neutral_colors.grayscale_60};
  text-align: center;
  font-family: ${theme.fonts.heading};
  font-style: normal;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: normal;
  padding: 0 3em;
  margin: 0 200px;
  background-color: #fff;
`;

export const IconStyling = css`
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  background: transparent;
  z-index: 100;
`;
