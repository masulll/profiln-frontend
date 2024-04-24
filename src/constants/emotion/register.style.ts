import { css } from "@emotion/css";
import theme from "binar/constants";
export const StyledRegister = css`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const BgAuth = css`
  flex-shrink: 0;
  margin-inline: -10% 0%;
`;

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
