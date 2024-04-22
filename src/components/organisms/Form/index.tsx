import InputPassword from "binar/components/molecules/InputPassword";
import InputGroup from "binar/components/molecules/InputGroup";
// import { Form } from "react-bootstrap";

const FormAction: React.FC = () => {
  return (
    <div>
      <InputGroup
        title={"Masukkan Email Anda"}
        types="email"
        placeHolder="Masukkan Email Kamu"
      />

      <InputPassword
        types={"password"}
        title={"Masukkan Password Anda"}
        placeHolder="Masukkan Password Kamu"
      />
    </div>
  );
};

export default FormAction;
