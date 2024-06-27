import { css } from "@emotion/css";
import theme from "../../constants";

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
  display: "inline-flex",
  textDecoration: "none",
  color: `${theme.neutral_colors.grayscale_70}`,
  background: "none",
  border: "none",
  outline: "none",
  boxShadow: "none",
  cursor: "pointer",
  fill: theme.neutral_colors.grayscale_70,
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

export const accordionLink = css({
  textDecoration: "none",
  color: theme.text_colors.body_copy_grey,
  border: "none",
  background: "none",
  fontSize: "18px",

  "&:hover": {
    color: theme.colors.primary,
  },
  "&:active": {
    color: theme.colors.primary,
  },
});

export const coloredIcon = css({
  fill: theme.colors.primary,
});
