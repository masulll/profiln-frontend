import styled from "@emotion/styled";
import theme from "binar/constants";
import Image from "next/image";

interface Props {
  title: string;
  wording: string;
}

const FormTitle: React.FC<Props> = ({ title, wording }) => {
  const Stack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  `;
  const Title = styled.p`
    color: ${theme.text_colors.dark};
    font-family: ${theme.fonts.body};
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 12px 0;
  `;

  const Wording = styled.p`
    color: ${theme.text_colors.dark};
    font-family: ${theme.fonts.body};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  `;
  return (
    <Stack>
      <Image
        src={"/assets/logo/Icon Binar.svg"}
        alt="logo binar"
        width={50}
        height={50}
      />
      <Title>{title}</Title>
      <Wording>{wording}</Wording>
    </Stack>
  );
};

export default FormTitle;
