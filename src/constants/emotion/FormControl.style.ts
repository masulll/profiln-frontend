// import { css } from "@emotion/css";
import { css } from "@emotion/react";
import theme from "binar/constants";

export const StyledFormControl = css`
  font-family: ${theme.fonts.body};
  border: none;

  &:focus {
    border-color: ${theme.colors.primary};
    outline-color: ${theme.colors.primary};
    outline-style: solid;
    outline-width: 2px;
  }
  display: flex;
  width: 28rem;
  height: 1.5rem;
  padding: 0.625rem 0.875rem;
  align-items: center;
  justify-content: space-between;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  background: #fff;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
`;

export const CustomButtonPrimary = css`
  background-color: ${theme.colors.primary};
  font-family: ${theme.fonts.heading};
  color: white;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 0.25rem;
  text-align: center;
  width: 30rem;
  height: 3.25rem;
  border: none;
`;

export const CustomButtonWithIcon = css`
  background: #4285f4;
  width: 30rem;
  height: 3.25rem;
  border: none;
  border-radius: 0.25rem;
  border: none;
  font-family: ${theme.fonts.heading
  };
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

export const TextFooterForm = css`
color: ${theme.neutral_colors.grayscale_80};
font-family: ${theme.fonts.body};
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
`
export const FooterLinkForm = css`
  color: ${theme.text_colors.primary};
  font-family: ${theme.fonts.body};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 4px;
`


