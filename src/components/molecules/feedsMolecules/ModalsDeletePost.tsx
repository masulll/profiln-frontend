import { useModals } from "binar/contexts/ModalsContext";
import { Form, Modal } from "react-bootstrap";
import {
  OutlineButton,
  PillButton,
  PrimaryButton,
} from "binar/components/atoms/Buttons";

import { REPORT_TYPE } from "binar/constants";
import { useState } from "react";
import { StyledInputGroup } from "binar/styles/emotion/DataForm.style";
import { Formik } from "formik";
const ModalsDeletePost = () => {
  const { showDeletePostModal, closeDeleteModal } = useModals();

  return (
    <>
      <Modal
        show={showDeletePostModal}
        onHide={closeDeleteModal}
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
            Hapus postingan
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
                <p css={{ textAlign: "center" }}>
                  Apakah anda yakin ingin menghapus postingan ini secara
                  permanen?
                </p>
                <div className="d-flex justify-content-center gap-5">
                  <OutlineButton
                    buttonText="Batalkan"
                    width="140px"
                    height="40px"
                    onClick={closeDeleteModal}
                  />
                  <PrimaryButton
                    buttonText="Hapus"
                    width="140px"
                    height="40px"
                    type="button"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalsDeletePost;
