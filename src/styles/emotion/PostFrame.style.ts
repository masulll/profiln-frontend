import { css } from "@emotion/css";
import theme from "binar/constants";
import { BsPrefixComponent } from "react-bootstrap/esm/helpers";

export const styledFrame = css({
  padding: "14px",
  alignItems: "center",
  borderRadius: "20px",
  background: "#fff",
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
});

export const styledPostInput = css({
  display: "flex",
  width: "735px",
  padding: "14px 12px",
  alignItems: "center",
  background: `${theme.neutral_colors.grayscale_20}`,
  borderRadius: "4px",
  fontWeight: "600",
  color: `${theme.neutral_colors.grayscale_60}`,
});

export const styledFollowingFrame = css({
  padding: "14px",
  alignItems: "center",
  borderRadius: "20px",
  background: "#fff",
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
});

export const styledFeedFrame = css({
  display: "inline-flex",
  flexDirection: "column",
  padding: "20px 40px",
  borderRadius: "20px",
  background: theme.neutral_colors.grayscale_10,
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
  width: "825px",
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

export const styledMyPostFrame = css({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  borderRadius: "20px",
  height: "auto",
  width: "338px",
  background: "#fff",
  boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
});

export const styledAccordionHeader = css({});
