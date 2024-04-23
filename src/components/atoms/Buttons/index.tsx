import styled from "@emotion/styled";
import theme from "binar/constants";
import Image from "next/image";

interface Props {
  buttonText: string;
  buttonIcon?: string;
}

const PrimaryButton: React.FC<Props> = ({ buttonText }) => {
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
      <CustomButtonLogin>{buttonText}</CustomButtonLogin>
    </>
  );
};

const ButtonWithIcon: React.FC<Props> = ({ buttonText, buttonIcon }) => {
  const CustomButtonLoginWithGoogle = styled.button`
    background: #4285f4;
    width: 30rem;
    height: 3.25rem;
    border: none;
    flex-shrink: 0;
    border-radius: 0.25rem;
  `;

  const ButtonStyle = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background: none;
    border: none;
    font-family: ${theme.fonts.body};
    color: ${theme.text_colors.white};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    text-align: center;
  `;

  return (
    <>
      <CustomButtonLoginWithGoogle>
        <ButtonStyle>
          <span>
            <Image
              src={`${buttonIcon}`}
              alt="Button Icon"
              width={18}
              height={18}
            />
          </span>
          {buttonText}
        </ButtonStyle>
      </CustomButtonLoginWithGoogle>
    </>
  );
};

export { PrimaryButton, ButtonWithIcon };
