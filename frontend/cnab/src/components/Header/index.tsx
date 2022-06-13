import { useState } from 'react';
import Modal from 'react-modal';
import { FileUpload } from '../File';
import "./style.css";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export function Header() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return <header>
    <div className="container">
      <div className="header_items">
        <h2>Bycoders_</h2>
        <button onClick={openModal}>Abrir modal</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <FileUpload />
      </Modal>
    </div>
  </header>
}