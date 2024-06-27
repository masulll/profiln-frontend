import { Popover, Overlay, Button } from "react-bootstrap";
import { useModals } from "binar/contexts/ModalsContext";
import { IconFriends, IconWorld } from "binar/helpers";
const PostVisibilityOverlay: React.FC = () => {
  const {
    showPostVisibility,
    refPostVisibility,
    targetPostVisibility,
    handlePostVisibility,
  } = useModals();

  return (
    <Overlay
      show={showPostVisibility}
      target={targetPostVisibility}
      placement="bottom"
      container={refPostVisibility}
      containerPadding={30}
    >
      <Popover id="popover-contained">
        <Popover.Body className="d-flex flex-column justify-content-center">
          <>
            <Button
              variant={"light"}
              css={{
                display: "inline-flex",
              }}
              value={"Publik"}
              onClick={(event) =>
                handlePostVisibility(event.currentTarget.value)
              }
            >
              <IconWorld css={{ marginRight: "5px" }} />
              <p>Untuk Publik</p>
            </Button>
            <Button
              variant={"light"}
              css={{
                display: "inline-flex",
              }}
              value={"Teman"}
              onClick={(event) =>
                handlePostVisibility(event.currentTarget.value)
              }
            >
              <IconFriends css={{ marginRight: "5px" }} />
              <p>Hanya Teman</p>
            </Button>
          </>
        </Popover.Body>
      </Popover>
    </Overlay>
  );
};

export default PostVisibilityOverlay;
