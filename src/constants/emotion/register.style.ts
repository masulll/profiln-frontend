import { css } from "@emotion/css";
import theme from "binar/constants";

export const BgAuth = css({
  height: "100%",
  minHeight: "100vh",
  objectFit: "cover",
  position: "absolute",
  left: 0,

  "@media screen and (max-width:1024px)": {
    display: "none",
  },
});

export const StyledRegister = css({
  display: "flex",
  minHeight: "100vh",
  justifyContent: "center",
  alignItems: "center",

  "@media screen and (max-width:1024px)": {
    display: "none",
  },
});
