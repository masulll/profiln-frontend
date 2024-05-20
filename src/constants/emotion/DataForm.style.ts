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

// export const StyledInputGroup = css`
//   font-family: ${theme.fonts.body};

//   background-image: none !important;

//   .form-control&:focus {
//     border: none;
//     outline: 0;
//     border-color: ${theme.colors.primary};
//     box-shadow: 0 0 0 1px ${theme.colors.primary};
//   }

//   font-size: 16px;
//   line-height: 20px;
//   padding: 10px;
//   border-radius: 4px;
//   background: #fff;
//   box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.25);
// `;

export const StyledInputGroup = css({
  fontFamily: `${theme.fonts.body}`,
  backgroundImage: "none !important",
  fontSize: "16px",
  lineHeight: "20px",
  padding: "10px",
  borderRadius: "4px",
  background: "#fff",
  boxShadow: " 0px 0px 4px 1px rgba(0, 0, 0, 0.25);",
  "& .form-control:focus": {
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
