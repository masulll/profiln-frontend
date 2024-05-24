import { Open_Sans } from "next/font/google";
import { causten } from "binar/helpers/fontTheme";

import { useSession } from "next-auth/react";
import TipsComponent from "binar/components/organisms/HomepageComponents/TipsComponents";
import PostFrame from "binar/components/organisms/HomepageComponents/PostFrame";
const opensans = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  const { data } = useSession();
  console.log(data);
  return (
    <main>
      <div>
        <TipsComponent />
        <PostFrame />
      </div>
    </main>
  );
}
