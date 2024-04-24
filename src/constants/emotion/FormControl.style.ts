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
  width: 30rem;
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

export const customButtonPrimary = css`
  background-color: ${theme.colors.primary};
  font-family: ${theme.fonts.body};
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

export const customButtonWithIcon = css`
  background: #4285f4;
  width: 30rem;
  height: 3.25rem;
  border: none;
  border-radius: 0.25rem;
  border: none;
  font-family: ${theme.fonts.body};
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


