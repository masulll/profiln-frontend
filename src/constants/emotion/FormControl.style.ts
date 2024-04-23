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
