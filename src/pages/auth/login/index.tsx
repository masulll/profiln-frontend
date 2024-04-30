import { ButtonWithIcon, PrimaryButton } from "binar/components/atoms/Buttons";
import FormTitle from "binar/components/molecules/FormTitle";

const login = () => {
  return (
    <>
      <FormTitle title="Selamat Datang" wording="shdbhsydbcfhdbhj" />
      <PrimaryButton buttonText="Login" />
      <ButtonWithIcon
        buttonText="Google"
        buttonIcon="/assets/icons/Google.svg"
      />
    </>
  );
};

export default login;
