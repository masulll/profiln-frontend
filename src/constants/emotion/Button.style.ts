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
    opacity: `0.8`,
    border: `2px solid ${theme.colors.primary} `,
  },
});
//   background-color: ${theme.colors.primary};
//   font-family: ${theme.fonts.utility};

//   &:disabled {
//     background-color: ${theme.neutral_colors.grayscale_50};
//   }
//   &:hover {
//     background-color: ${theme.colors.primary};
//   }
//   &:active {
// background-color: ${theme.colors.primary} !important;
// opacity: 0.8;
//   }
