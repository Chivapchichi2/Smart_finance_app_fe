import React from 'react';
import { createPortal } from 'react-dom';
import { ReactComponent as IconClose } from '../../svg/close.svg';
import styles from './modal.module.css';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ text }) {
  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.btnClose} type="button">
          <IconClose className={styles.iconClose} />
        </button>
        <p className={styles.text}>{text}</p>
        <div className={styles.btnWrapper}>
          <button className={styles.button} type="button">
            Да
          </button>
          <button className={styles.button} type="button">
            Нет
          </button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}
