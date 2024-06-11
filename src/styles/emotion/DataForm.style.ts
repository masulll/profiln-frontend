import { css } from "@emotion/css";
import theme from "binar/constants";

export const styledForm = css({
  padding: "20px 20px",
  maxWidth: "730px",
  borderRadius: "1.3125rem",
  background: "#fff",
  boxShadow: "0px 0px 5px 0px rgba(0, 0, 0, 0.25)",

  "@media screen and (max-width:1199px)": {
    width: "auto",
    maxHeight: "fit-content",
  },
  "@media screen and (max-width:550px)": {
    maxWidth: "550px",
  },
  "@media screen and (max-width:327px)": {
    maxWidth: "327px",
  },
});

export const styledFormLayout = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: 0,
  paddingRight: 0,
  minHeight: "100vh",

  "@media screen and (max-width:1199px)": {
    columns: "auto",
    minHeight: "100vh",
  },
});

export const styledUnderlineText = css({
  textDecoration: "underline",
  color: `${theme.text_colors.primary}`,
  fontSize: "16px",
  background: "none",
  border: "none",
  outline: "none",
  boxShadow: "none",
});

export const StyledInputGroup = css({
  fontFamily: `${theme.fonts.body}`,
  backgroundImage: "none !important",
  fontSize: "14px",
  lineHeight: "20px",
  padding: "10px",
  borderRadius: "4px",
  background: "#fff",
  "&.form-control:focus": {
    border: "none",
    outline: 0,
    borderColor: `${theme.colors.primary}`,
    boxShadow: `0 0 0 1px ${theme.colors.primary}`,
  },
});
export const StyledPhoneInput = css({
  fontFamily: `${theme.fonts.body}`,
  fontSize: "14px",
  lineHeight: "20px",
  padding: "10px",
  width: "100% !important",
  height: "42px !important",
  borderRadius: "4px",
  background: "#fff",
  border: `1px solid ${theme.neutral_colors.grayscale_60}`,
  outline: "none",

  "&:focus": {
    border: "none",
    outline: 0,
    borderColor: `${theme.colors.primary}`,
    boxShadow: `0 0 0 1px ${theme.colors.primary}`,
  },
});

export const StyledTitle = css({
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
});

export const StyledDescription = css({
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  color: `${theme.neutral_colors.grayscale_70}`,
});

export const StyledSelectInput = css({
  fontSize: "14px",
  lineHeight: "20px",
  padding: "10px",
  borderRadius: "4px",

  "&:focus": {
    border: "none",
    outline: 0,
    borderColor: `${theme.colors.primary}`,
    boxShadow: `0 0 0 1px ${theme.colors.primary}`,
  },
  "&option:hover": {
    backgroundColor: `${theme.colors.primary}`,
    color: "#fff",
  },
});

export const boldDescription = css({
  fontSize: `14px`,
  fontWeight: "700",
  lineHeight: "normal",
});
