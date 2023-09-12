import React from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

export const Backdrop = ({ onClick }) => (
  <div className={styles["backdrop"]} onClick={onClick}>
    Modal
  </div>
);

export const ModalOverlay = ({ children }) => (
  <div className={styles["modal"]}>
    <div className={styles["content"]}>{children}</div>
  </div>
);

export const Modal = ({ onBackdropClick, children }) => {
  const portalElement = document.querySelector("#overlays");

  return (
    <>
      {createPortal(<Backdrop onClick={onBackdropClick} />, portalElement)}
      {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};
