import React from 'react';
import Backdrop from '../Backdrop/Backdrop.tsx';

interface Props extends React.PropsWithChildren{
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
}

const Modal: React.FC<Props> = ({show, title , onClose, children}) => {
  return (
    <>
      <Backdrop show={show} onClick={onClose}/>
      <div className="modal show" style={{ display: show ? 'block' : 'none' }}>
        <div className="modal-new-attractor bg-white">
          <div className="modal-header">
            <h1 className="modal-title fs-5">{title}</h1>
            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;