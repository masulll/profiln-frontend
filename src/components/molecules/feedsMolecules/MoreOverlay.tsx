import { Popover, Overlay, Button } from "react-bootstrap";
import { useModals } from "binar/contexts/ModalsContext";
import { IconPencil, IconTrash } from "binar/helpers";

const MoreOverlay: React.FC = () => {
  const { showMore, refMore, targetMore, openMore, openDeleteModal } =
    useModals();

  return (
    <Overlay
      show={showMore}
      target={targetMore}
      placement="bottom"
      container={refMore}
      containerPadding={30}
    >
      <Popover id="popover-contained" className="d-flex flex-column">
        <Button
          variant="light"
          css={{
            display: "flex",
            justifyContent: "space-around",
            padding: "10px",
          }}
        >
          <IconPencil css={{ marginRight: "5px" }} />
          <p>Edit Posting</p>
        </Button>

        <Button
          variant="light"
          css={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
          }}
          onClick={(event) => {
            openDeleteModal();
            openMore(event);
          }}
        >
          <IconTrash css={{ marginRight: "5px" }} />
          <p>Hapus posting</p>
        </Button>
      </Popover>
    </Overlay>
  );
};

export default MoreOverlay;
