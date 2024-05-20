import {
  StyledDescription,
  StyledTitle,
} from "binar/constants/emotion/DataForm.style";

interface Props {
  title: string;
  description?: string;
}

const TitleForm: React.FC<Props> = ({ title, description }) => {
  return (
    <div>
      <h2 className={`${StyledTitle}`}>{title}</h2>
      <p className={`${StyledDescription}`}>{description}</p>
    </div>
  );
};

export default TitleForm;
