import React, { useContext } from "react";

import styles from "./modal.module.scss";
import { ModalContext } from "@/contexts/modal.context";

const Modal = () => {
  const { modalContent, hideModal } = useContext(ModalContext);
  return (
    <div className={styles.modalContainer}>
      <div
        className={styles.bgFilter}
        onClick={(e) => {
          hideModal();
        }}
      ></div>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div>{modalContent}</div>
      </div>
    </div>
  );
};

export default Modal;
