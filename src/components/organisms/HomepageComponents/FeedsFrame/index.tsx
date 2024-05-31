import { IconCountButton } from "binar/components/atoms/Buttons";
import ProfileLink from "binar/components/molecules/HomepageMolecules/Navbars/ProfileLink";
import theme from "binar/constants";
import {
  styledIconDefault,
  styledLink,
} from "binar/constants/emotion/Link.style";
import {
  styledFeedFrame,
  styledFrame,
} from "binar/constants/emotion/PostFrame.style";
import { styledTextDisabled } from "binar/constants/emotion/TipsComponent.style";
import Image from "next/image";

const FeedsFrame = () => {
  return (
    <div className={`${styledFeedFrame} my-3`}>
      <div className="d-flex justify-content-between">
        <ProfileLink showDate={true} />
        <button className={`${styledLink}`}>
          <Image
            src={"/assets/icons/ri_more-fill.svg"}
            width={28}
            height={28}
            alt=""
          />
        </button>
      </div>
      <div className="d-flex flex-column container text-wrap">
        <h3 style={{ fontSize: "24px", fontWeight: "700" }}>
          Case Study: Redesign McD App
        </h3>
        <p style={{ fontSize: "18px" }}>
          I find this flow particularly intriguing for redesign due to numerous
          improvement opportunities. Moreover, I believe that optimizing this
          pathway is crucial for marketing goals, given that the ‘Gett...
        </p>
        <button
          className={styledTextDisabled}
          style={{
            marginTop: "-10px",
            background: "transparent",
            border: `none`,
            textDecoration: "underline",
            textAlign: "left",
          }}
        >
          baca selengkapnya
        </button>

        <hr
          className="rounded"
          style={{
            background: theme.neutral_colors.grayscale_50,
            height: "1px",
          }}
        />
        <div className="container d-flex justify-content-between">
          <IconCountButton
            buttonText="Suka"
            isCount={true}
            iconSrc="/assets/icons/iconamoon_like.svg"
          />
          <IconCountButton
            buttonText="Komentar"
            isCount={true}
            iconSrc="/assets/icons/iconamoon_comment-bold.svg"
          />
          <IconCountButton
            buttonText="Repost"
            isCount={true}
            iconSrc="/assets/icons/zondicons_repost.svg"
          />
          <IconCountButton
            buttonText="Kirim"
            isCount={false}
            iconSrc="/assets/icons/uil_share.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default FeedsFrame;
