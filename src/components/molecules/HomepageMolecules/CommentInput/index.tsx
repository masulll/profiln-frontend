import { Form } from "react-bootstrap";
import { Formik } from "formik";
import { IconShare, IconImage, IconEmoji, IconSend } from "binar/helpers";
import { StyledInputGroup } from "binar/styles/emotion/createPost.style";

interface CommentProps {
  width: string;
  height: string;
}

const CommentInput: React.FC<CommentProps> = ({ width, height }) => {
  return (
    <Form>
      <Form.Group css={StyledInputGroup({ width, height })}>
        <Form.Control
          name="post_desc"
          type="text"
          as="textarea"
          placeholder="Tambah komentar..."
          plaintext
          css={{ maxHeight: "60px" }}
        />
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <IconEmoji /> <IconImage />
          </div>
          <IconSend />
        </div>
      </Form.Group>
    </Form>
  );
};

export default CommentInput;
