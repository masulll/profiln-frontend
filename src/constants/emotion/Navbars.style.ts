import { css } from "@emotion/css";
import theme from "binar/constants";

export const styledNavbar = css({
  background: `${theme.neutral_colors.grayscale_10}`,
  border: `1px solid  ${theme.neutral_colors.grayscale_30}`,
});

export const styledSearchInput = css({
  fontFamily: `${theme.fonts.body}`,
  fontSize: "14px",
  lineHeight: "20px",
  paddingLeft: "32px",
  borderRadius: "6px",
  background: `${theme.neutral_colors.grayscale_20}`,
  "&.form-control:focus": {
    border: "none",
    background: `${theme.neutral_colors.grayscale_20}`,
    outline: 0,
    borderColor: `${theme.colors.primary}`,
    boxShadow: `0 0 0 1px ${theme.colors.primary}`,
  },
  "::placeholder": {
    textAlign: "left",
    color: `${theme.neutral_colors.grayscale_80}`,
  },
});
export const IconSearchStyling = css`
  display: inline-block;
  vertical-align: middle;
  position: absolute;
  left: 5px;
  top: 5px;
  cursor: pointer;
  background: transparent;
  z-index: 100;
`;

export const LinkStyling = css({
  fontWeight: "600",
  fontSize: "18px",
  lineHeight: "normal",
  textDecoration: "none",
  color: `${theme.neutral_colors.grayscale_60}`, // Or specify a color
  "&:hover": {
    textDecoration: "none",
    color: `${theme.colors.primary}`, // Or specify a hover color
  },
  "&:active": { textDecoration: "none", color: `${theme.colors.primary}` },
});

export const activeLink = css({
  color: `${theme.colors.primary}`,
});
