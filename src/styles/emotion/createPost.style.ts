import theme from "binar/constants";
import { css } from "@emotion/react";

interface Props {
  width?: string | undefined;
  height?: string | undefined;
}

export const StyledInputGroup = ({ width, height }: Props) =>
  css({
    fontSize: "18px",
    padding: "20px",
    border: `1px solid ${theme.neutral_colors.grayscale_60}`,
    borderRadius: "6px",
    boxShadow: "none",
    width: width ? width : "750px",
    height: height ? height : "400px",
    outline: 0,
    background: "#fff",
    "&.form-control:focus": {
      border: `1px solid`,
      outline: 0,
      borderColor: `${theme.colors.primary}`,
      boxShadow: `0 0 0 1px ${theme.colors.primary}`,
    },
    "&::placeholder": {
      color: theme.neutral_colors.grayscale_60,
      fontFamily: theme.fonts.body,
      fontSize: "24px",
      fontWeight: "700 !important",
      border: "none",
    },
  });
