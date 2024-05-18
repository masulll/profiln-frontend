import { css } from "@emotion/css";
import theme from "binar/constants";

export const styledForm = css({
  padding: "20px 20px",

  maxWidth: "730px",
  maxHeight: "700px",
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
  display: "flex",
  alignItems: "center",
  textDecoration: "underline",
  color: `${theme.text_colors.primary}`,
  fontSize: "16px",
  background: "none",
  border: "none",
  outline: "none",
  boxShadow: "none",
});
