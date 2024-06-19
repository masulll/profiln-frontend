import React from "react";
import { useModals } from "binar/contexts/ModalsContext";
import { Form, Modal } from "react-bootstrap";
import { useState } from "react";
import { StyledInputGroup } from "binar/styles/emotion/DataForm.style";
import { Formik } from "formik";
import theme from "binar/constants";
import { PrimaryButton } from "binar/components/atoms/Buttons";
const ModalsCreatePost: React.FC = () => {
  const { showCreatePostModal, closeCreatePostModal } = useModals();
  return (
    <div>
      <Modal
        show={showCreatePostModal}
        onHide={closeCreatePostModal}
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
                <div className="d-flex gap-2"></div>

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
    </div>
  );
};

export default ModalsCreatePost;
