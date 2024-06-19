import Image from "next/image";
import {
  styledFrame,
  styledPostInput,
} from "binar/styles/emotion/PostFrame.style";

import { useModals } from "binar/contexts/ModalsContext";
import ModalsCreatePost from "binar/components/molecules/HomepageMolecules/ModalsCreatePost";
const PostFrame: React.FC = () => {
  const { openCreatePostModal } = useModals();
  return (
    <div className={`${styledFrame} d-inline-flex my-3`}>
      <Image
        src="/assets/icons/Profile_default.png"
        width="48"
        height="48"
        className="mx-2 rounded-circle"
        alt="my post icons"
      />
      <div
        role="button"
        className={`${styledPostInput}`}
        onClick={openCreatePostModal}
      >
        Mulai buat posting
      </div>
      <ModalsCreatePost />
    </div>
  );
};
export default PostFrame;
