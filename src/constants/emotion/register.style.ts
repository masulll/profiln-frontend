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

export const styledLineText = css`
  flex-grow: 0;
  margin: 0 14rem;
  color: ${theme.neutral_colors.grayscale_70};
  font-weight: 300;
`;
export const styledLine = css`
  flex-grow: 0;
  background: ${theme.neutral_colors.grayscale_70};
  height: 0.1rem;
  width: 100%;
`;
export const containerStyle = css`
  display: flex;
`;
