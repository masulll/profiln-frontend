import { Popover, Overlay, Modal, Button } from "react-bootstrap";
import { useState, useRef } from "react";
import { ModalProvider, useModals } from "binar/contexts/ModalsContext";
import { IconPencil, IconTrash } from "binar/helpers";
const MoreOverlay: React.FC = () => {
  const {
    showReportModal,
    openReportModal,
    closeReportModal,
    showMore,
    openMore,
    refMore,
    targetMore,
    showCommentModal,
    closeCommentModal,
  } = useModals();

  return (
    <Overlay
      show={showMore}
      target={targetMore}
      placement="bottom"
      container={refMore}
      containerPadding={30}
    >
      <Popover id="popover-contained">
        <Popover.Body className="d-flex flex-column justify-content-center">
          <>
            <div
              role="button"
              css={{
                display: "inline-flex",
                paddingX: "30px",
              }}
            >
              <IconPencil css={{ marginRight: "5px" }} />
              <p>Edit Posting</p>
            </div>
            <div role="button" css={{ display: "flex" }}>
              <IconTrash css={{ marginRight: "5px" }} />
              <p>Hapus posting</p>
            </div>
          </>
        </Popover.Body>
      </Popover>
    </Overlay>
  );
};

export default MoreOverlay;
