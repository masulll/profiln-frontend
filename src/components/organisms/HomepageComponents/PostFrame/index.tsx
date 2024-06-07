import Image from "next/image";
import {
  styledFrame,
  styledPostInput,
} from "binar/styles/emotion/PostFrame.style";

const PostFrame: React.FC = () => {
  return (
    <div className={`${styledFrame} d-inline-flex my-3`}>
      <Image
        src="/assets/icons/Profile_default.png"
        width="48"
        height="48"
        className="mx-2 rounded-circle"
        alt="my post icons"
      />
      <div role="button" className={`${styledPostInput}`}>
        Mulai buat posting
      </div>
    </div>
  );
};
export default PostFrame;
