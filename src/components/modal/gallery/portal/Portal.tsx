import React, { FC } from 'react';
import ReactDOM from 'react-dom';

type PropsType = {
  isOpen: boolean;
  onClose: ()=> void;
  children: React.ReactNode
};
export const Portal: FC<PropsType> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const modalRoot = document.getElementById('modal-root');
  if (!modalRoot) return null; 

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal">
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    modalRoot,
  );
};
