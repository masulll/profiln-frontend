import { OutlineButton } from "binar/components/atoms/Buttons";
import {
  styledForm,
  styledTextDisabled,
} from "binar/constants/emotion/TipsComponent.style";
import Image from "next/image";
import { Button } from "react-bootstrap";

const TipsComponent: React.FC = () => {
  return (
    <div className={`${styledForm} d-flex flex-column align-items-center`}>
      <Image
        src="/assets/icons/contract.png"
        width="60"
        height="60"
        className=""
        alt="my post icons"
      />
      <h2 style={{ fontSize: "24px", fontWeight: "700" }}>
        Halo Bella, apakah Anda ingin membuat resume atau membuat portofolio?
      </h2>
      <p className={`${styledTextDisabled}`}>
        Temukan cara praktis untuk membuat resume dan portofolio.
      </p>
      <div className="d-flex" style={{ gap: "100px" }}>
        <OutlineButton buttonText="Buat resume" />
        <OutlineButton buttonText="Buat portofolio" />
      </div>
    </div>
  );
};

export default TipsComponent;
