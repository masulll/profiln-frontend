// import { css } from "@emotion/css";
import { css } from "@emotion/css";
import theme from "binar/constants";

export const StyledInputGroup = css`
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
  height: 2.75rem;
  padding: 0.75rem 0.875rem;
  align-items: center;
  justify-content: space-between;
  gap: 0.625rem;
  flex-shrink: 0;
  border-radius: 0.25rem;
  background: #fff;
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
`;

export const styledForm = css`
  display: inline-flex;
  flex-direction: column;
  padding: 2.5rem;
  align-items: center;
  gap: 1.875rem;
  border-radius: 1.3125rem;
  background: #fff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
`;

export const styledFormGroup = css`
  display: flex;
  height: 5rem;
  justify-content: center;
  align-items: flex-start;
  gap: 0.625rem;
`;

export const Wrapper = css`
  position: relative;
`;

export const StyledCheckboxInput = css`
  border-radius: 4px;
  width: 1.25rem;
  height: 1.25rem;

  background: ${theme.neutral_colors};
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);

  &:checked {
    accent-color: ${theme.colors.primary};
  }
`;

export const styledErrorText = css`
  color: ${theme.colors.error};
  font-size: 0.875rem;
  font-weight: 300;
`;
