import Link from "next/link";
import Image from "next/image";
import { styledTextDisabled } from "binar/constants/emotion/TipsComponent.style";
import theme from "binar/constants";

interface Props {
  showDate: boolean;
}

const ProfileLink: React.FC<Props> = ({ showDate }) => {
  return (
    <Link
      href="/auth/register"
      className="d-flex"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Image
        src="/assets/icons/Profile_default.png"
        width="48"
        height="48"
        className="mx-3 rounded-circle"
        alt="my post icons"
      />
      <div className="d-flex flex-column justify-content-start">
        <h5 style={{ fontSize: "18px", fontWeight: "600" }}>
          Christina Pauline
        </h5>
        <p
          style={{
            fontSize: "16px",
            marginTop: "-5px",
            color: theme.text_colors.body_copy_grey,
          }}
        >
          Product Designer at Tokopedia
        </p>
        {showDate && (
          <p
            className={`${styledTextDisabled}`}
            style={{ fontSize: "16px", marginTop: "-15px" }}
          >
            01 Mar 2024 | 09 AM
          </p>
        )}
      </div>
    </Link>
  );
};

export default ProfileLink;
