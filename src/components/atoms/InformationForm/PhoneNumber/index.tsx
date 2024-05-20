import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Form, InputGroup } from "react-bootstrap";
import { StyledPhoneInput } from "binar/constants/emotion/DataForm.style";
import { css } from "@emotion/css";

const PhoneNumInput: React.FC = () => {
  const [phone, setPhone] = useState<string | null | undefined>();
  return (
    <Form.Group>
      <Form.Label style={{ fontSize: "12px" }}>Nomor Handphone</Form.Label>
      <InputGroup>
        <PhoneInput
          country={"id"}
          value={phone}
          onChange={setPhone}
          placeholder="Masukkan nomor handphone anda"
          inputClass={`${StyledPhoneInput}`}
        />
      </InputGroup>
    </Form.Group>
  );
};

export default PhoneNumInput;
