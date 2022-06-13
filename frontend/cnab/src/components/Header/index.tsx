import { useContext } from 'react';
import Modal from 'react-modal';
import { ModalContext } from '../../context/ModalContext';
import { FileUpload } from '../File';
import { Logout } from '../Logout';
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
  const { openModal, closeModal, modalIsOpen } = useContext(ModalContext);

  return <header>
    <div className="container">
      <div className="header_items">
        <h2>Bycoders_</h2>
        <div>
          <button onClick={openModal}>File uploader</button>
          <Logout />
        </div>
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