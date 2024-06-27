import { useState } from "react";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Form, InputGroup } from "react-bootstrap";
import { StyledPhoneInput } from "binar/styles/emotion/DataForm.style";
import { css } from "@emotion/css";

const PhoneNumInput: React.FC<PhoneInputProps> = ({
  onChange,
  value,
  isValid,
}) => {
  const [phone, setPhone] = useState<string | null | undefined>();
  return (
    <Form.Group>
      <Form.Label style={{ fontSize: "12px" }}>Nomor Handphone</Form.Label>
      <InputGroup>
        <PhoneInput
          country={"id"}
          value={value}
          onChange={onChange}
          placeholder="Masukkan nomor handphone anda"
          inputClass={`${StyledPhoneInput}`}
          isValid={isValid}
          disableCountryGuess={false}
        />
      </InputGroup>
    </Form.Group>
  );
};

export default PhoneNumInput;
