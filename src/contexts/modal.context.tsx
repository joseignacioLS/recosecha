"use client";

import { ReactNode, createContext, useState } from "react";

interface modalData {
  modalContent: ReactNode;
  isVisible: boolean;
  showModal: (content: ReactNode) => void;
  hideModal: () => void;
}

export const ModalContext = createContext<modalData>({
  modalContent: <span>Modal</span>,
  isVisible: false,
  showModal: (content) => {},
  hideModal: () => {},
});

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalContent, setModalContent] = useState<ReactNode>(
    <span>Hehehe</span>
  );
  const [isVisible, setIsVisible] = useState(false);

  const showModal = (content: ReactNode) => {
    setModalContent(content);
    setIsVisible(true);
  };

  const hideModal = () => setIsVisible(false);
  return (
    <ModalContext.Provider
      value={{
        isVisible: isVisible,
        modalContent: modalContent,
        showModal: showModal,
        hideModal: hideModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
