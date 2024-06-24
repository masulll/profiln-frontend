import { useState } from "react";
import { PillButton } from "binar/components/atoms/Buttons";
import TipsComponent from "binar/components/organisms/HomepageComponents/TipsComponents";
import PostFrame from "binar/components/organisms/HomepageComponents/PostFrame";

import FollowingFrame from "binar/components/organisms/HomepageComponents/FollowingFrame";
import FeedsFrame from "binar/components/organisms/HomepageComponents/FeedsFrame";

export default function Home() {
  const [active, setActive] = useState<null | number>(1);

  const handleClick = (index: number) => {
    setActive(index);
  };
  return (
    <main className="d-flex justify-content-center my-3">
      <div style={{ margin: "0em 1.3em" }}>
        <TipsComponent />
        <PostFrame />
        <div className="d-flex gap-2 ">
          <PillButton
            buttonText="Untuk Anda"
            active={active === 1}
            onClick={() => handleClick(1)}
          />
          <PillButton
            buttonText="Mengikuti"
            active={active === 2}
            onClick={() => handleClick(2)}
          />
          <PillButton
            buttonText="Terbaru"
            active={active === 3}
            onClick={() => handleClick(3)}
          />
        </div>
        <FeedsFrame />
      </div>
      <div className="">
        <FollowingFrame />
      </div>
    </main>
  );
}
