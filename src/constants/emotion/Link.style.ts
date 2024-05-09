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
