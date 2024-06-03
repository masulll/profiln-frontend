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
  background: "none",
  border: "none",
  outline: "none",
  boxShadow: "none",
});

export const styledNeutralLink = css({
  textDecoration: "none",
  color: theme.neutral_colors.grayscale_70,
  fontSize: "14px",
  paddingBlock: "4px",

  "&:hover": {
    color: theme.neutral_colors.grayscale_100,
  },
});
