import styled from "@emotion/styled";
import theme from "binar/constants";
import Image from "next/image";

const ButtonLoginWithGoogle: React.FC = () => {
  const CustomButtonLoginWithGoogle = styled.button`
    background: #4285f4;
    width: 30rem;
    height: 3.25rem;
    border: none;
    flex-shrink: 0;
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
    border-radius: 0.25rem;
    text-align: center;
  `;

  return (
    <>
      <CustomButtonLoginWithGoogle>
        <ButtonStyle>
          <span>
            <Image
              src="/assets/icons/Google.svg"
              alt="Google Icon"
              width={18}
              height={18}
            />
          </span>
          Google
        </ButtonStyle>
      </CustomButtonLoginWithGoogle>
    </>
  );
};

export default ButtonLoginWithGoogle;
