import { useState } from "react";
import { styledForm } from "binar/styles/emotion/DataForm.style";
import TitleForm from "binar/components/atoms/InformationForm";
import InputField from "binar/components/atoms/InformationForm/InputField";
import { customDatePickerStyles } from "binar/styles/emotion/DataForm.style";
import SelectField from "binar/components/atoms/InformationForm/SelectField";
import { OutlineButton, PrimaryButton } from "binar/components/atoms/Buttons";
import { Form, InputGroup } from "react-bootstrap";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import theme, { JOB_TYPE, LOCATION_TYPE } from "binar/constants";
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];
interface Props {
  handleBack: (tab: string) => void;
  handleNext: (tab: string) => void;
}

const WorkHistory: React.FC<Props> = ({ handleBack, handleNext }) => {
  const handleGoBack = () => {
    handleBack("tab2");
  };

  const handleNextForm = () => {
    handleNext("tab3");
  };

  const [value, onChange] = useState<Value>(null);
  const [value2, onChange2] = useState<Value>(null);
  const [value3, onChange3] = useState<Value>(null);
  const [value4, onChange4] = useState<Value>(null);

  return (
    <>
      <div className={`${styledForm} my-3 `}>
        <TitleForm
          title={"Pengalaman Kerja"}
          description="Mari ceritakan tentang pekerjaan Anda! Bagikan pengalaman, pencapaian, dan tanggung jawab Anda di posisi tersebut. Semua informasi ini akan membantu membuat profil Anda lebih menarik dan informatif."
        />
        <Form>
          <InputField
            title="Nama Perkerjaan Anda"
            name="jobtitle"
            type="text"
            value=""
            placeholder="Masukan nama pekerjaan anda"
          />
          <InputField
            title="Nama Perusahaan Anda"
            name="company"
            type="text"
            value=""
            placeholder="Masukkan Nama Perusahaan Anda"
          />

          <SelectField
            title="Jenis Pekerjaan Anda"
            name="work-type"
            placeholder="Jenis Pekerjaan Anda"
            value=" "
            options={JOB_TYPE}
          />
          <InputField
            title="Lokasi Perusahaan Anda"
            name="location"
            type="text"
            value=""
            placeholder="Masukan lokasi anda bekerja"
          />

          <SelectField
            title="Masukan Type Lokasi Perkerjaan"
            name="work-type"
            placeholder="Masukan type lokasi perkerjaan anda"
            value=" "
            options={LOCATION_TYPE}
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
                label={`Saat ini saya sedang mengerjakan pekerjaan ini`}
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
            Anda dapat melengkapi informasi Pengalaman Kerja tersebut nanti di
            halaman Profile.
          </p>
          <div className="d-flex justify-content-end">
            <OutlineButton
              buttonText="Kembali"
              width="111px"
              height="39px"
              onClick={handleGoBack}
              type="button"
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

export default WorkHistory;
