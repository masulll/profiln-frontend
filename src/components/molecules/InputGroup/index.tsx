import { Form } from "react-bootstrap";
import { css } from "@emotion/css";
import InputComponent from "binar/components/atoms/InputComponent";
import Labels from "binar/components/atoms/labels";

interface Props {
  title: string;
  types: string;
  placeHolder: string;
}

const InputGroup: React.FC<Props> = ({ title, types, placeHolder }) => {
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Labels title={title} />
        <InputComponent types={types} placeHolder={placeHolder} />
      </Form.Group>
    </>
  );
};

export default InputGroup;
