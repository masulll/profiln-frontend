import { css } from "@emotion/css";
import theme from "binar/constants";

export const styledForm = css({
  display: "flex",
  flexDirection: "column",
  padding: "20px 10px",
  textAlign: "center",
  borderRadius: "20px",
  background: "#fff",
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",

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

export const styledTextDisabled = css({
  fontSize: "18px",
  color: `${theme.neutral_colors.grayscale_70}`,
});
