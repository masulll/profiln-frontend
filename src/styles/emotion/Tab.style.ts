import { css } from "@emotion/react";
import theme from "binar/constants";
const tabStyles = css`
  .nav-link {
    padding: 1rem 2rem;
    color: ${theme.colors.disabled};
    font-weight: bold;
    background-color: transparent;
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  .nav-link.active {
    color: ${theme.colors.primary};
    background-color: transparent;
  }

  .dot {
    width: 5px;
    height: 5px;
    background-color: ${theme.colors.disabled};
    border-radius: 50%;
    margin-right: 8px;
  }

  .nav-link.active .dot {
    background-color: ${theme.colors.primary};
  }
`;

const progressBarStyles = css`
  height: 5px;
  margin-top: 1rem;
  .progress-bar {
    background-color: ${theme.colors.primary};
  }
`;

const tabWrapperStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export { tabStyles, progressBarStyles, tabWrapperStyles };
