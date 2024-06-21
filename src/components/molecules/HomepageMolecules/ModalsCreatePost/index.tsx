import React from "react";
import { useModals } from "binar/contexts/ModalsContext";
import { Form, Modal } from "react-bootstrap";

import { StyledInputGroup } from "binar/styles/emotion/createPost.style";
import { Formik } from "formik";

import { PrimaryButton } from "binar/components/atoms/Buttons";

import {
  IconImage,
  IconEmoji,
  IconWorld,
  IconArrowDown,
  IconFriends,
} from "binar/helpers";
import PostVisibilityOverlay from "../../feedsMolecules/PostVisibilityOverlay";
const ModalsCreatePost: React.FC = () => {
  const {
    showCreatePostModal,
    closeCreatePostModal,
    visibilityPost,
    refPostVisibility,
    targetPostVisibility,
    openPostVisibility,
  } = useModals();
  return (
    <div>
      <Modal
        show={showCreatePostModal}
        onHide={closeCreatePostModal}
        keyboard={false}
        centered
        size="lg"
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
              <Modal.Header closeButton>
                <Modal.Title>
                  <Form.Control
                    name="post_title"
                    placeholder="Title"
                    plaintext
                    css={{
                      fontSize: "24px",
                      fontWeight: "700",
                    }}
                  />
                </Modal.Title>
              </Modal.Header>
              <Modal.Body
                css={{
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                <div className="d-flex gap-3">
                  <div className="d-flex flex-column gap-2 mt-4">
                    <IconEmoji />
                    <IconImage />
                  </div>
                  <Form.Group css={StyledInputGroup}>
                    <Form.Control
                      name="post_desc"
                      type="text"
                      as="textarea"
                      placeholder="Tulis topik anda di sini"
                      plaintext
                      css={{ maxHeight: "260px" }}
                    />
                    <div></div>
                  </Form.Group>
                </div>
                <div className="d-flex align-items-center justify-content-end py-2 gap-5">
                  <div ref={refPostVisibility}>
                    <button
                      css={{
                        height: "24px",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                      ref={targetPostVisibility}
                      onClick={(event) => openPostVisibility(event)}
                    >
                      {visibilityPost === "Publik" ? (
                        <IconWorld />
                      ) : (
                        <IconFriends />
                      )}

                      <span> {visibilityPost}</span>
                      <IconArrowDown />
                    </button>
                    <PostVisibilityOverlay />
                  </div>

                  <PrimaryButton
                    buttonText="Posting"
                    width="72px"
                    height="40px"
                    type="button"
                  />
                </div>
              </Modal.Body>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
};

export default ModalsCreatePost;
