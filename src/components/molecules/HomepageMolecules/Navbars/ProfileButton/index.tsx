import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  activeLink,
  LinkStyling,
  noCaret,
} from "binar/styles/emotion/Navbars.style";
import { Dropdown, NavItem, NavLink } from "react-bootstrap";
import { signOut, useSession } from "next-auth/react";
import { useAuth } from "binar/contexts/AuthContext";
const ProfileButton: React.FC = () => {
  const { logout } = useAuth();
  const router = useRouter();
  return (
    <>
      <Link
        href={"/my_post"}
        className={`${LinkStyling} ${
          router.pathname === "/my_post" ? `${activeLink}` : ""
        }`}
      >
        <Image
          src={
            router.pathname === "/my_post"
              ? "/assets/icons/actions-edit-color.svg"
              : "/assets/icons/actions-edit.svg"
          }
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
              <Image
                src="/assets/icons/ph_user-bold.svg"
                width="23"
                height="23"
                className="mx-2 rounded-circle"
                alt="my post icons"
              />
              Profile
            </Link>
          </Dropdown.Item>
          <Dropdown.Item className={`${LinkStyling}`}>
            <button
              onClick={() => logout()}
              className={`${LinkStyling}`}
              style={{ background: "transparent", border: "none" }}
            >
              <Image
                src="/assets/icons/tabler_logout.svg"
                width="24"
                height="24"
                className="mx-2 rounded-circle"
                alt="my post icons"
              />
              Logout
            </button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default ProfileButton;
