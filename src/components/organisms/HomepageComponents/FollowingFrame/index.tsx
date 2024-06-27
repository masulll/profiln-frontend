import { PrimaryButton, SmallButton } from "binar/components/atoms/Buttons";
import { styledFollowingFrame } from "binar/styles/emotion/PostFrame.style";
import ProfileLink from "binar/components/molecules/HomepageMolecules/Navbars/ProfileLink";

const FollowingFrame = () => {
  return (
    <div className={`${styledFollowingFrame} `}>
      <h2 style={{ fontSize: "20px", fontWeight: "700" }}>
        Tambahkan ke pertemanan Anda
      </h2>

      <div className="py-2">
        <ProfileLink showDate={false} />
        <SmallButton style={{ width: "30%", marginLeft: "27%" }}>
          Follow
        </SmallButton>
      </div>
      <div className="py-2">
        <ProfileLink showDate={false} />
        <SmallButton style={{ width: "30%", marginLeft: "27%" }}>
          Follow
        </SmallButton>
      </div>
      <div className="py-2">
        <ProfileLink showDate={false} />
        <SmallButton style={{ width: "30%", marginLeft: "27%" }}>
          Follow
        </SmallButton>
      </div>
      <div className="py-2">
        <ProfileLink showDate={false} />
        <SmallButton style={{ width: "30%", marginLeft: "27%" }}>
          Follow
        </SmallButton>
      </div>
    </div>
  );
};

export default FollowingFrame;
