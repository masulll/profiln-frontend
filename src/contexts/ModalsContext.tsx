import { createContext, ReactNode, useContext, useState, useRef } from "react";
import { EmojiClickData } from "emoji-picker-react";
interface ModalContextType {
  showReportModal: boolean;
  showCreatePostModal: boolean;
  showCommentModal: boolean;
  showMore: boolean;
  showPostVisibility: boolean;
  showDeletePostModal: boolean;
  showEmoji: boolean;
  chosenEmoji: string | null;
  visibilityPost: string;
  refPostVisibility: any;
  targetPostVisibility: any;
  targetMore: any;
  refMore: any;
  refEmoji: any;
  targetEmoji: any;
  openMore: (event: any) => void;
  openReportModal: () => void;
  closeReportModal: () => void;
  openCreatePostModal: () => void;
  closeCreatePostModal: () => void;
  openCommentModal: () => void;
  closeCommentModal: () => void;
  openPostVisibility: (event: any) => void;
  handlePostVisibility: (event: string | null) => void;
  openDeleteModal: () => void;
  closeDeleteModal: () => void;
  openEmoji: (event: any) => void;
  onEmojiClick: (emojiObject: EmojiClickData) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [showReportModal, setShowReportModal] = useState(false);
  const [visibilityPost, setVisibilityPost] = useState<string>("Publik");

  const [showMore, setShowMore] = useState(false);
  const refMore = useRef(null);
  const [targetMore, setTargetMore] = useState(null);

  const [showPostVisibility, setShowPostVisibility] = useState(false);
  const refPostVisibility = useRef(null);
  const [targetPostVisibility, setTargetPostVisibility] = useState(null);

  const [showEmoji, setShowEmoji] = useState(false);
  const refEmoji = useRef(null);
  const [targetEmoji, setTargetEmoji] = useState(null);
  const [chosenEmoji, setChosenEmoji] = useState<string | null>(null);

  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [showDeletePostModal, setShowDeletePostModal] = useState(false);

  const openEmoji = (event: any) => {
    setShowEmoji(!showEmoji);
    setTargetEmoji(event.target);
  };

  const onEmojiClick = (emojiObject: EmojiClickData) => {
    setChosenEmoji(emojiObject.emoji);
  };

  const openDeleteModal = () => setShowDeletePostModal(true);
  const closeDeleteModal = () => setShowDeletePostModal(false);

  const openReportModal = () => setShowReportModal(true);
  const closeReportModal = () => setShowReportModal(false);

  const openMore = (event: any) => {
    setShowMore(!showMore);
    setTargetMore(event.target);
  };

  const openPostVisibility = (event: any) => {
    setShowPostVisibility(!showPostVisibility);
    setTargetPostVisibility(event.target);
  };

  const handlePostVisibility = (value: string | null) => {
    if (value) {
      setVisibilityPost(value);
    }
  };

  const openCommentModal = () => setShowCommentModal(true);
  const closeCommentModal = () => setShowCommentModal(false);

  const openCreatePostModal = () => setShowCreatePostModal(true);
  const closeCreatePostModal = () => setShowCreatePostModal(false);
  return (
    <ModalContext.Provider
      value={{
        showReportModal,
        showCreatePostModal,
        showCommentModal,
        showMore,
        showPostVisibility,
        showDeletePostModal,
        showEmoji,
        chosenEmoji,
        refEmoji,
        targetEmoji,
        visibilityPost,
        targetMore,
        refMore,
        refPostVisibility,
        targetPostVisibility,
        openMore,
        openReportModal,
        closeReportModal,
        openCreatePostModal,
        closeCreatePostModal,
        openCommentModal,
        closeCommentModal,
        openPostVisibility,
        handlePostVisibility,
        openDeleteModal,
        closeDeleteModal,
        openEmoji,
        onEmojiClick,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModals = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("UseModals must be used in a Modal Provider");
  }
  return context;
};
