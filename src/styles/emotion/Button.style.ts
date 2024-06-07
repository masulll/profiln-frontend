import { css } from "@emotion/css";
import theme from "binar/constants";

export const StyledOutlineButton = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
  fontFamily: `${theme.fonts.body}`,
  fontWeight: "600",
  color: `${theme.colors.primary}`,
  fontSize: "14px",
  borderRadius: "4px",
  textAlign: "center",
  width: "140px",
  padding: "10px 14px",
  border: `2px solid ${theme.colors.primary} `,

  "&:disabled": {},
  "&:hover": {
    backgroundColor: `${theme.colors.primary}`,
    color: "white",
    border: `1px solid ${theme.colors.primary} `,
  },
  "&:active": {
    backgroundColor: `${theme.colors.primary} !important`,
    color: "white",
    opacity: `0.8`,
    border: `2px solid ${theme.colors.primary} `,
  },
  "&:focus": {
    outline: "0",
    boxShadow: `0 0 0 2px ${theme.colors.primary}`,
    color: "white",
    backgroundColor: `${theme.colors.primary} `,
  },
});

export const StyledPillButton = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
  fontFamily: `${theme.fonts.body}`,
  fontWeight: "600",
  color: `${theme.neutral_colors.grayscale_70}`,
  fontSize: "14px",
  borderRadius: "20px",
  height: "40px",
  width: "116px",
  textAlign: "center",
  padding: "12px",
  border: `1px solid ${theme.neutral_colors.grayscale_50} `,
  outline: "none !important",
  "&:hover": {
    backgroundColor: `${theme.colors.primary} !important`,
    color: "white",
    border: `1px solid ${theme.colors.primary} !important `,
    outline: "none !important",
  },
  "&:active": {
    backgroundColor: `${theme.colors.primary} !important`,
    border: `1px solid ${theme.colors.primary} !important `,
    outline: "none !important",
  },
  "&:focus": {
    border: "none !important",
    outline: `1px solid ${theme.colors.primary} !important `,
    boxShadow: `0 0 0 2px ${theme.colors.primary} !important`,
    backgroundColor: `${theme.colors.primary} `,
  },
});

export const activePillButton = css({
  backgroundColor: `${theme.colors.primary} !important`,
  color: "white",
  border: `1px solid ${theme.colors.primary}`,
  outline: "none !important",
  "&:active": {
    backgroundColor: `${theme.colors.primary} !important`,
    border: `1px solid ${theme.colors.primary} !important `,
    outline: "none !important",
  },
  "&focus": {
    backgroundColor: `${theme.colors.primary} !important`,
    color: "white",
    border: `none `,
    outline: "none",
  },
});

export const CustomButtonPrimary = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.colors.primary,
  fontFamily: theme.fonts.utility,
  color: "white",
  fontSize: "1rem",
  fontWeight: "500",
  borderRadius: "0.25rem",
  textAlign: "center",
  border: "none",
  "&:disabled": {
    backgroundColor: theme.neutral_colors.grayscale_50,
  },
  "&:hover": {
    backgroundColor: theme.colors.primary,
  },
  "&:active": {
    backgroundColor: `${theme.colors.primary} !important`,
    opacity: "0.9",
  },
  "&:focus": {
    backgroundColor: `${theme.colors.primary} `,
    color: "white",
    borderColor: theme.colors.primary,
    outline: "0",
  },
});
