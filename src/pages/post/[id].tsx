import { useRouter } from "next/router";
import { useState } from "react";
import { PillButton } from "binar/components/atoms/Buttons";

import TipsComponent from "binar/components/organisms/HomepageComponents/TipsComponents";
import PostFrame from "binar/components/organisms/HomepageComponents/PostFrame";
import FollowingFrame from "binar/components/organisms/HomepageComponents/FollowingFrame";
import FeedsFrame from "binar/components/organisms/HomepageComponents/FeedsFrame";

export default function Page() {
  const router = useRouter();

  return (
    <main className="d-flex justify-content-center my-3">
      <div style={{ margin: "0em 1.3em" }}>
        <FeedsFrame />
        <p>test post details:{router.query.id}</p>
      </div>
      <div className="">
        <FollowingFrame />
      </div>
    </main>
  );
}
