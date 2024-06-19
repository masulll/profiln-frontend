import { useState, useRef } from "react";
import ProfileLink from "binar/components/molecules/HomepageMolecules/Navbars/ProfileLink";
import theme from "binar/constants";
import { styledIconDefault } from "binar/styles/emotion/Link.style";
import { styledFeedFrame } from "binar/styles/emotion/PostFrame.style";
import { styledTextDisabled } from "binar/styles/emotion/TipsComponent.style";
import {
  IconComment,
  IconLike,
  IconMore,
  IconPencil,
  IconRepost,
  IconShare,
  IconSocialShare,
  IconTablerFlag,
  IconTrash,
} from "binar/helpers";
import { useRouter } from "next/router";

import { useModals } from "binar/contexts/ModalsContext";
import MoreOverlay from "binar/components/molecules/feedsMolecules/MoreOverlay";
import ModalsReport from "binar/components/molecules/feedsMolecules/ModalsReport";
const FeedsFrame = () => {
  const router = useRouter();
  const {
    showMore,
    openMore,
    targetMore,
    refMore,
    showCommentModal,
    closeCommentModal,
  } = useModals();

  const fullText = `
  I find this flow particularly intriguing for redesign due to numerous improvement opportunities. Moreover, I believe that optimizing this pathway is crucial for marketing goals, given that the ‘Getting Started’ process significantly influences user engagement and retention. By refining this initial interaction, we can enhance user satisfaction, reduce churn rates, and ultimately drive higher conversion rates. This optimization is not just about aesthetics or user interface improvements, but also involves streamlining the steps, providing clear guidance, and ensuring that users immediately see the value our service offers. Thus, a well-thought-out redesign of this flow could have a profound impact on our overall business performance.`;

  const truncatedLength = 200;
  const truncatedText = fullText.substring(0, truncatedLength) + "...";

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${styledFeedFrame} my-3`}
      style={{ fill: theme.neutral_colors.grayscale_70 }}
    >
      <div className="d-flex justify-content-between">
        <ProfileLink showDate={true} />
        {router.pathname === "/my_post" ? (
          <div ref={refMore}>
            <button
              css={{
                height: "24px",
                backgroundColor: "transparent",
                border: "none",
              }}
              ref={targetMore}
              onClick={(event) => openMore(event)}
            >
              <IconMore />
            </button>

            <MoreOverlay />
          </div>
        ) : (
          <ModalsReport />
        )}
      </div>
      <div className="d-flex flex-column container text-wrap">
        <h3 style={{ fontSize: "24px", fontWeight: "700" }}>
          Case Study: Redesign McD App
        </h3>
        <p style={{ fontSize: "18px" }}>
          {isExpanded ? fullText : truncatedText}
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
          onClick={handleToggle}
        >
          {isExpanded ? "lihat lebih sedikit" : "baca selengkapnya"}
        </button>

        <hr
          className="rounded"
          style={{
            background: theme.neutral_colors.grayscale_50,
            height: "1px",
          }}
        />
        <div className="container d-flex justify-content-between ">
          <button className={`${styledIconDefault} d-inline-flex `}>
            <IconLike className={styledIconDefault} />
            <p>0</p>
          </button>
          <button className={`${styledIconDefault} d-inline-flex `}>
            <IconComment className={styledIconDefault} />
            <p>0</p>
          </button>
          <button className={`${styledIconDefault} d-inline-flex `}>
            <IconRepost className={styledIconDefault} />
            <p css={{}}>0</p>
          </button>
          <button className={`${styledIconDefault} d-inline-flex `}>
            <IconShare className={styledIconDefault} />
            <p>Bagikan</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedsFrame;
