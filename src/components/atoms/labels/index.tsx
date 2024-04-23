import { Form } from "react-bootstrap";

interface Props {
  title: string;
}

const Labels: React.FC<Props> = ({ title }) => {
  return (
    <div>
      <Form.Label className="mb-3 font-bold "> {title}</Form.Label>
    </div>
  );
};

export default Labels;
