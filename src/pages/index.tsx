import Image from "next/image";
import { Open_Sans } from "next/font/google";

import styles from "binar/styles/Home.module.css";

import LoginForm from "binar/components/organisms/LoginForm";

const opensans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <LoginForm />
    </>
  );
}
