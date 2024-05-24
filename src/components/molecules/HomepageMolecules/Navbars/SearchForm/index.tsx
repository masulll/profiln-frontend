import { Nav, Form } from "react-bootstrap";
import Image from "next/image";
import { Wrapper } from "binar/constants/emotion/FormControl.style";
import {
  styledSearchInput,
  IconSearchStyling,
} from "binar/constants/emotion/Navbars.style";
const SearchForm: React.FC = () => {
  return (
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
  );
};

export default SearchForm;
