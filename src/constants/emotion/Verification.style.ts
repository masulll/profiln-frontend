import { css } from "@emotion/css";
import theme from "binar/constants/index";

export const styledInput = css`
  font-family: ${theme.fonts.heading};
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  margin: 0 18px;
  border: none;
  border-radius: 4px;
  background: var(--Grayscale-10, #fff);
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  text-align: center;
  font-size: 36px;
  cursor: not-allowed;
  pointer-events: none;
`;

export const styledOTPLayout = css({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  margin: "30px 32px",
});
export const verifText = css({
  display: "flex",
  fontSize: "16px",
  lineHeight: "normal",
  marginTop: "-30px",
});

export const timerLayout = css({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const resendButton = css({
  fontFamily: "var(--font-Causten)",
  fontWeight: "600",
  background: "none",
  border: "none",
  outline: "none",
  boxShadow: "none",
});
