import { useModals } from "binar/contexts/ModalsContext";
import { Form, Modal } from "react-bootstrap";

import { IconMore } from "binar/helpers";
import { PillButton } from "binar/components/atoms/Buttons";
import theme from "binar/constants";
import { REPORT_TYPE } from "binar/constants";
import { useState } from "react";
import InputField from "binar/components/atoms/InformationForm/InputField";
import { StyledInputGroup } from "binar/styles/emotion/DataForm.style";
const ModalsReport = () => {
  const {
    showReportModal,
    openReportModal,
    closeReportModal,
    showCommentModal,
    closeCommentModal,
  } = useModals();
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
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            css={{
              fontFamily: "inherit",
              fontSize: "24px",
              fontWeight: "600",
            }}
          >
            Laporkan postingan
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          css={{
            fontFamily: theme.fonts.body,
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
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
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalsReport;
