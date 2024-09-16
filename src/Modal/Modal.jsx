import React, { FC, PropsWithChildren, ReactNode, useState } from "react";
import styles from "./Modal.module.scss";

const Modal = ({ active, setActive, children }) => {
  return (
    <div
      className={active ? styles.modal_active : styles.modal}
      onClick={() => setActive && setActive(false)}
    >
      <div
        className={
          active ? styles.modal__content_active : styles.modal__content
        }
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
