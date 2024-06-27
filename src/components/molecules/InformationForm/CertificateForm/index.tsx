import React, { useState } from "react";
import { styledForm } from "binar/styles/emotion/DataForm.style";
import TitleForm from "binar/components/atoms/InformationForm";
import InputField from "binar/components/atoms/InformationForm/InputField";
import { css } from "@emotion/react";
import { OutlineButton, PrimaryButton } from "binar/components/atoms/Buttons";
import { Form, InputGroup } from "react-bootstrap";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import theme from "binar/constants";
import { customDatePickerStyles } from "binar/styles/emotion/DataForm.style";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Props {
  handleBack: (tab: string) => void;
  handleNext: (tab: string) => void;
}

const CertificateForm: React.FC<Props> = ({ handleBack, handleNext }) => {
  const handleGoBack = () => {
    handleBack("tab4");
  };

  const handleNextForm = () => {
    handleNext("tab4");
  };

  const clickStillActive = () => {
    setStillActive(!stillActive);
  };

  const [stillActive, setStillActive] = useState(true);
  const [value, onChange] = useState<Value>(null);
  const [value2, onChange2] = useState<Value>(null);
  const [value3, onChange3] = useState<Value>(null);
  const [value4, onChange4] = useState<Value>(null);

  return (
    <>
      <div className={`${styledForm} my-3 `}>
        <TitleForm
          title={"Sertifikat"}
          description="Tunjukkan sertifikat yang anda miliki sesuai dengan bidang yang Anda kuasai untuk meyakinkan anda memiliki kemampuan di bidang tersebut"
        />
        <Form>
          <InputField
            title="Nama Sertifikat"
            name="certificate_name"
            type="text"
            value=""
            placeholder="cth: Fundamental of Digital Marketing"
          />
          <InputField
            title="Organisasi Penerbit"
            name="certificate_publisher"
            type="text"
            value=""
            placeholder="cth: Google"
          />

          <InputField
            title="ID Kredensial (opsional)"
            name="certificate_credentials_id"
            type="text"
            value=""
            placeholder=""
          />

          <div>
            <Form.Group className="my-3">
              <Form.Label style={{ fontSize: "12px" }}>
                Tanggal Diterbitkan
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
                label={`Sertifikat tidak memiliki tanggal kadaluwarsa`}
                css={{
                  label: { fontSize: "14px" },
                  ".form-check-input:checked": {
                    backgroundColor: theme.colors.primary,
                  },
                }}
                onChange={clickStillActive}
              />

              {stillActive && (
                <>
                  <Form.Label style={{ fontSize: "12px" }}>
                    Tanggal Kadaluwarsa (opsional)
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
                </>
              )}
            </Form.Group>
          </div>
          <InputField
            title="Link Sertifikat (opsional)"
            name="certificate_url"
            type="text"
            value=""
            placeholder=""
          />

          <div className="d-flex justify-content-end">
            <OutlineButton
              buttonText="Kembali"
              type="button"
              width="111px"
              height="39px"
              onClick={handleGoBack}
            />

            <PrimaryButton
              buttonText="Lanjut"
              width="111px"
              height="39px"
              css={{ marginRight: "0px", marginLeft: "24px" }}
              type="button"
              onClick={handleNextForm}
            />
          </div>
        </Form>
      </div>
    </>
  );
};

export default CertificateForm;
