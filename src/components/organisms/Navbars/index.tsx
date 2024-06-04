import ProfileButton from "binar/components/molecules/HomepageMolecules/Navbars/ProfileButton";
import SearchForm from "binar/components/molecules/HomepageMolecules/Navbars/SearchForm";

import {
  LinkStyling,
  activeLink,
  noCaret,
  styledNavbar,
} from "binar/constants/emotion/Navbars.style";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Nav, Container, Navbar } from "react-bootstrap";

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

        <SearchForm />
        <Nav className="d-flex gap-5 align-items-center">
          <Link
            href={"/"}
            className={`${LinkStyling}  ${
              router.pathname === "/" ? `${activeLink}` : ""
            } `}
          >
            <Image
              src={
                router.pathname === "/"
                  ? "/assets/icons/Home-color.svg"
                  : `/assets/icons/Home.svg`
              }
              width="28"
              height="28"
              className="mx-2"
              alt="home"
            />
            Beranda
          </Link>

          <ProfileButton />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navbars;
