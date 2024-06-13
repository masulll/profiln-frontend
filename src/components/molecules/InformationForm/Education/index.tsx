import React, { useState } from "react";
import {
  StyledInputGroup,
  boldDescription,
  styledForm,
} from "binar/styles/emotion/DataForm.style";
import TitleForm from "binar/components/atoms/InformationForm";
import InputField from "binar/components/atoms/InformationForm/InputField";
import { css } from "@emotion/react";
import SelectField from "binar/components/atoms/InformationForm/SelectField";
import { OutlineButton, PrimaryButton } from "binar/components/atoms/Buttons";
import { Form, InputGroup } from "react-bootstrap";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import theme, { EDUCATION_LEVEL } from "binar/constants";
import { customDatePickerStyles } from "binar/styles/emotion/DataForm.style";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Education: React.FC = () => {
  const [value, onChange] = useState<Value>(null);
  const [value2, onChange2] = useState<Value>(null);
  const [value3, onChange3] = useState<Value>(null);
  const [value4, onChange4] = useState<Value>(null);

  return (
    <>
      <div className={`${styledForm} my-3 `}>
        <TitleForm
          title={"Pendidikan"}
          description="Beritahu latar pendidikan terakhir Anda dengan kami untuk mengetahui lebih jauh tentang Institusi sampai dengan lamanya anda menempuh pendidikan."
        />
        <Form>
          <InputField
            title="Nama Institusi"
            name="institution"
            type="text"
            value=""
            placeholder="cth: Harvard University"
          />

          <SelectField
            title="Tingkat Pendidikan"
            name="education_level"
            placeholder="cth: Sarjana"
            value=" "
            options={EDUCATION_LEVEL}
          />
          <InputField
            title="Bidang Studi"
            name="education_major"
            type="text"
            value=""
            placeholder="cth: Ilmu Komputer"
          />
          <InputField
            title="Nilai/ IPK"
            name="education_gpa"
            type="number"
            value={3.5}
            placeholder="cth: 3.50"
          />

          <div>
            <Form.Group className="my-3">
              <Form.Label style={{ fontSize: "12px" }}>
                Tanggal Mulai
              </Form.Label>
              <div className={customDatePickerStyles}>
                <DatePicker
                  onChange={onChange}
                  value={value}
                  monthAriaLabel="Month"
                  monthPlaceholder="Bulan"
                  yearPlaceholder="Tahun"
                  format="MMMM"
                  clearIcon={null}
                  calendarIcon={null}
                />
                <DatePicker
                  onChange={onChange2}
                  value={value2}
                  yearAriaLabel="Year"
                  yearPlaceholder="Tahun"
                  format="yyyy"
                  maxDetail="decade"
                  clearIcon={null}
                  calendarIcon={null}
                />
              </div>
              <InputGroup hasValidation>
                {/* <Form.Control.Feedback
                  type="invalid"
                  className={` ${styledErrorText} background-image-none`}
                >
                  {errorText}
                </Form.Control.Feedback> */}
              </InputGroup>
            </Form.Group>
          </div>
          <div>
            <Form.Group className="my-3">
              <Form.Check
                type="checkbox"
                id={`default-checkbox`}
                label={`Saat ini saya sedang menempuh pendidikan ini`}
                css={{
                  label: { fontSize: "14px" },
                  ".form-check-input:checked": {
                    backgroundColor: theme.colors.primary,
                  },
                }}
              />
              <Form.Label style={{ fontSize: "12px" }}>
                Tanggal Berakhir
              </Form.Label>

              <div className={customDatePickerStyles}>
                <DatePicker
                  onChange={onChange3}
                  value={value3}
                  monthAriaLabel="Month"
                  monthPlaceholder="Bulan"
                  format="MMMM"
                  clearIcon={null}
                  calendarIcon={null}
                />
                <DatePicker
                  onChange={onChange4}
                  value={value4}
                  yearAriaLabel="Year"
                  yearPlaceholder="Tahun"
                  format="yyyy"
                  maxDetail="decade"
                  clearIcon={null}
                  calendarIcon={null}
                />
              </div>
              <InputGroup hasValidation>
                {/* <Form.Control.Feedback
                  type="invalid"
                  className={` ${styledErrorText} background-image-none`}
                >
                  {errorText}
                </Form.Control.Feedback> */}
              </InputGroup>
            </Form.Group>
          </div>
          <p css={{ fontSize: "14px", fontWeight: "600", textAlign: "center" }}>
            Anda dapat melengkapi informasi Pendidikan tersebut nanti di halaman
            Profile.
          </p>
          <div className="d-flex justify-content-end">
            <OutlineButton buttonText="Kembali" width="111px" height="39px" />

            <PrimaryButton
              buttonText="Lanjut"
              width="111px"
              height="39px"
              css={{ marginRight: "0px", marginLeft: "24px" }}
            />
          </div>
        </Form>
      </div>
    </>
  );
};

export default Education;
