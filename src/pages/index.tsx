import { Open_Sans } from "next/font/google";
import { causten } from "binar/helpers/fontTheme";
import { Button } from "react-bootstrap";
import { signOut } from "next-auth/react";

const opensans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className={causten.className}>Homepage</h1>
      <h1 className={causten.className}>Homepage</h1>
      <Button onClick={() => signOut()}>Keluar</Button>
    </div>
  );
}
