import { Popover, Overlay, Button } from "react-bootstrap";
import { useModals } from "binar/contexts/ModalsContext";
import { IconSocialShare, IconTablerFlag } from "binar/helpers";

const MoreHomepageOverlay: React.FC = () => {
  const { showMore, refMore, targetMore, openReportModal, openMore } =
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
          <IconSocialShare css={{ marginRight: "5px" }} />
          Bagikan Posting
        </Button>

        <Button
          variant="light"
          css={{
            display: "flex",
            justifyContent: "space-around",
            padding: "5px",
          }}
          onClick={(event) => {
            openReportModal();
            openMore(event);
          }}
        >
          <IconTablerFlag />
          Laporkan posting
        </Button>
      </Popover>
    </Overlay>
  );
};

export default MoreHomepageOverlay;
