import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  activeLink,
  LinkStyling,
  noCaret,
} from "binar/constants/emotion/Navbars.style";
import { Dropdown, NavItem, NavLink } from "react-bootstrap";
const ProfileButton: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <Link
        href={"/"}
        className={`${LinkStyling} ${
          router.pathname === "/my-post" ? `${activeLink}` : ""
        }`}
      >
        <Image
          src="/assets/icons/actions-edit.svg"
          width="21"
          height="21"
          className="mx-2"
          alt="my post icons"
        />
        My Post
      </Link>
      <Dropdown
        as={NavItem}
        className={`${LinkStyling} ${
          router.pathname === "/profile" ? `${activeLink}` : ""
        }`}
      >
        <Dropdown.Toggle
          as={NavLink}
          className={`${LinkStyling} ${noCaret}`}
          bsPrefix="dropdown-toggle"
        >
          <Image
            src="/assets/icons/Profile_default.png"
            width="24"
            height="24"
            className="mx-2 rounded-circle"
            alt="my post icons"
          />
          Bella
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item className={`${LinkStyling}`}>
            <Link href="/" className={`${LinkStyling}`}>
              View Profile
            </Link>
          </Dropdown.Item>
          <Dropdown.Item className={`${LinkStyling}`}>
            <Link href="/" className={`${LinkStyling}`}>
              Logout
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default ProfileButton;
