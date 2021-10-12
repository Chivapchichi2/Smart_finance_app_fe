/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import authActions from '../../redux/auth/auth-actions';
import authOperations from '../../redux/auth/auth-operations';
import { ReactComponent as IconClose } from '../../svg/close.svg';
import styles from './modal.module.css';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ text }) => {
  const dispatch = useDispatch();

  const closeModal = () => dispatch(authActions.isModalShow());

  const onLogout = useCallback(
    () => dispatch(authOperations.logOut()),
    [dispatch],
  );

  const handleKeydown = e => {
    console.log('KEY', e.code);
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => window.removeEventListener('keydown', handleKeydown);
  }, []);

  return createPortal(
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button className={styles.btnClose} type="button" onClick={closeModal}>
          <IconClose className={styles.iconClose} />
        </button>
        <p className={styles.text}>{text}</p>
        <div className={styles.btnWrapper}>
          <button className={styles.button} type="button" onClick={onLogout}>
            Да
          </button>
          <button className={styles.button} type="button" onClick={closeModal}>
            Нет
          </button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
};

export default Modal;
