import styled from "@emotion/styled";
import theme from "binar/constants";

const ButtonLogin: React.FC = () => {
  const CustomButtonLogin = styled.button`
    background-color: ${theme.colors.primary};
    font-family: ${theme.fonts.body};
    color: white;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 0.25rem;
    text-align: center;
    width: 30rem;
    height: 3.25rem;
    border: none;
  `;

  return (
    <>
      <CustomButtonLogin>Login</CustomButtonLogin> 
    </>
  );
};

export default ButtonLogin;
