import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { Form } from "react-bootstrap";
import theme from "binar/constants";
import { string } from "yup";

interface Props {
  type: string;
  placeHolder: string;
}
const InputComponent: React.FC<Props> = ({ type, placeHolder }) => {
  const StyledFormControl = styled(Form.Control)`
    font-family: ${theme.fonts.body};
    border: none;

    &:focus {
      border-color: ${theme.colors.primary};
      outline-color: ${theme.colors.primary};
      outline-style: solid;
      outline-width: 2px;
    }
    display: flex;
    width: 30rem;
    height: 1.5rem;
    padding: 0.625rem 0.875rem;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    border-radius: 0.25rem;
    border: 1px solid var(--Primary-Main, #933393);
    background: #fff;
  `;
  return (
    <>
      <StyledFormControl type={type} placeholder={placeHolder} />
    </>
  );
};

export default InputComponent;
