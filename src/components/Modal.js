import React, { useState } from 'react';

const Modal = ({ imageSrc }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <img
        src={imageSrc}
        alt="Snow"
        style={{ width: '100%', maxWidth: '300px' }}
        onClick={openModal}
      />
      {isOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <div className="model-content-div">
            <img className="modal-content" src={imageSrc} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
