import { useModals } from "binar/contexts/ModalsContext";
import { Form, Modal } from "react-bootstrap";
import { IconMore } from "binar/helpers";
import { PillButton, PrimaryButton } from "binar/components/atoms/Buttons";

import { REPORT_TYPE } from "binar/constants";
import { useState } from "react";
import { StyledInputGroup } from "binar/styles/emotion/DataForm.style";
import { Formik } from "formik";
const ModalsReport = () => {
  const { showReportModal, openReportModal, closeReportModal } = useModals();
  const [active, setActive] = useState<null | number>(null);

  const handleClick = (index: number) => {
    setActive(index);
  };

  return (
    <>
      <button
        css={{
          height: "24px",
          backgroundColor: "transparent",
          border: "none",
        }}
        onClick={openReportModal}
      >
        <IconMore />
      </button>
      <Modal
        show={showReportModal}
        onHide={closeReportModal}
        centered
        css={{ fontWeight: "600" }}
      >
        <Modal.Header closeButton>
          <Modal.Title
            css={{
              fontSize: "24px",
              fontWeight: "700",
            }}
          >
            Laporkan postingan
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{ reportType: "", report_desc: "" }}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              console.log(values);
            }}
          >
            {({
              errors,
              handleChange,
              values,
              handleSubmit,
              touched,
              isValid,

              handleBlur,
              isSubmitting,
              dirty,
            }) => (
              <Form onSubmit={handleSubmit}>
                <p>Pilih alasan untuk melaporkan postingan ini</p>
                <div className="d-flex gap-2">
                  {Object.values(REPORT_TYPE).map((value, index) => (
                    <PillButton
                      key={index}
                      buttonText={value}
                      active={active === index}
                      onClick={() => handleClick(index)}
                    />
                  ))}
                </div>
                <p>Mengapa anda memilih laporan tersebut?</p>

                <Form.Control
                  name="report_desc"
                  type="text"
                  placeholder="Masukkan alasan anda"
                  className={`${StyledInputGroup}`}
                />

                <PrimaryButton
                  buttonText="Kirim Laporan"
                  width="140px"
                  height="40px"
                  css={{
                    marginRight: "0px",
                    marginLeft: "auto",
                    marginTop: "30px",
                  }}
                  type="button"
                />
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalsReport;
