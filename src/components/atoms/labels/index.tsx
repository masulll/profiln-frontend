import { styledLabel } from "binar/constants/emotion/Label.style";
import { Form } from "react-bootstrap";

interface Props {
  title: string;
}

const Labels: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <Form.Label className={`${styledLabel} `}> {title}</Form.Label>
    </div>
  );
};

export default Labels;
