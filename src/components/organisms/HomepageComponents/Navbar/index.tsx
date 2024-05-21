import { Wrapper } from "binar/constants/emotion/FormControl.style";
import {
  IconSearchStyling,
  LinkStyling,
  activeLink,
  noCaret,
  styledNavbar,
  styledSearchInput,
} from "binar/constants/emotion/Navbars.style";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Nav,
  Container,
  Navbar,
  Form,
  Dropdown,
  NavItem,
  NavLink,
} from "react-bootstrap";

const Navbars: React.FC = () => {
  const router = useRouter();
  return (
    <Navbar className={`${styledNavbar}`}>
      <Container>
        <Link href={"/"}>
          <Image
            src="/assets/logo/Logo Binar.svg"
            width="124"
            height="37"
            className=""
            alt="React Bootstrap logo"
          />
        </Link>

        <Nav className={`mx-auto ${Wrapper} `}>
          <Form.Control placeholder="Cari" className={`${styledSearchInput}`} />
          <div>
            <Image
              src={`/assets/icons/Search_grayscale_20.svg`}
              width={24}
              height={24}
              alt=""
              className={`${IconSearchStyling}`}
            />
          </div>
        </Nav>
        <Nav className="d-flex gap-5 align-items-center">
          <Link
            href={"/"}
            className={`${LinkStyling}  ${
              router.pathname === "/" ? `${activeLink}` : ""
            } `}
          >
            <Image
              src="/assets/icons/Home.svg"
              width="28"
              height="28"
              className="mx-2"
              alt="home"
            />
            Beranda
          </Link>

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
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
