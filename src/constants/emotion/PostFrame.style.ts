import { css } from "@emotion/css";
import theme from "binar/constants";

export const styledFrame = css({
  padding: "14px",
  alignItems: "center",
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

export const styledPostInput = css({
  width: "735px",
  padding: "14px 12px",
  background: `${theme.neutral_colors.grayscale_20}`,
  borderRadius: "4px",
  fontWeight: "600",
  color: `${theme.neutral_colors.grayscale_60}`,
});
