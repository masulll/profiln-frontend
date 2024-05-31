import { css } from "@emotion/css";
import theme from "..";

export const styledLink = css({
  textDecoration: "underline",
  color: `${theme.text_colors.dark}`,
  fontSize: "16px",
  marginTop: "-30px",
  background: "none",
  border: "none",
  outline: "none",
  boxShadow: "none",
});

export const styledIconDefault = css({
  textDecoration: "none",
  color: `${theme.neutral_colors.grayscale_70}`,
  fontSize: "16px",
  background: "none",
  border: "none",
  outline: "none",
  boxShadow: "none",
});
