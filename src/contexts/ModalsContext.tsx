import { createContext, ReactNode, useContext, useState, useRef } from "react";

interface ModalContextType {
  showReportModal: boolean;
  showCreatePostModal: boolean;
  showCommentModal: boolean;
  showMore: boolean;
  targetMore: any;
  refMore: any;
  openMore: (event: any) => void;
  openReportModal: () => void;
  closeReportModal: () => void;
  openCreatePostModal: () => void;
  closeCreatePostModal: () => void;
  openCommentModal: () => void;
  closeCommentModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [showReportModal, setShowReportModal] = useState(false);

  const [showMore, setShowMore] = useState(true);
  const refMore = useRef(null);
  const [targetMore, setTargetMore] = useState(null);

  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const [showCommentModal, setShowCommentModal] = useState(false);

  const openReportModal = () => setShowReportModal(true);
  const closeReportModal = () => setShowReportModal(false);

  const openMore = (event: any) => {
    setShowMore(!showMore);
    setTargetMore(event.target);
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
        targetMore,
        refMore,
        openMore,
        openReportModal,
        closeReportModal,
        openCreatePostModal,
        closeCreatePostModal,
        openCommentModal,
        closeCommentModal,
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
