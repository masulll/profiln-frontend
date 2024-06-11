import InfoDataForm from "binar/components/organisms/InfoDataForm";
import theme from "binar/constants";
import { IconArrowRight } from "binar/helpers";
import {
  styledFormLayout,
  styledUnderlineText,
} from "binar/styles/emotion/DataForm.style";
import { Nav } from "react-bootstrap";

const index = () => {
  return (
    <div className="container  position-relative">
      <Nav className="justify-content-around py-3" activeKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-0"> • Pengisian Data Diri</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">• Tentang Saya</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">• Pengalaman Kerja</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">• Pendidikan</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">• Sertifikat</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5">• Skill</Nav.Link>
        </Nav.Item>
      </Nav>
      <button
        className={`${styledUnderlineText} position-absolute`}
        style={{ top: "100px", right: "100px" }}
      >
        <IconArrowRight style={{ fill: theme.colors.primary }} /> Lewati langkah
        ini
      </button>
      <div className={`${styledFormLayout}`}>
        <InfoDataForm />
      </div>
    </div>
  );
};

export default index;
