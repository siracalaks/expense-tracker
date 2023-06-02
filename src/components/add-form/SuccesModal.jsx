import React from "react";
import Modal from "react-modal";
import {Link} from "react-router-dom";

const SuccessModal = ({modalOpen, setModalOpen}) => {
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
  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div class="alert alert-danger" role="alert">
        Bilgileriniz başarılı ile gönderildi.{" "}
        <Link to="/" class="alert-link">
          Anasayfaya dönmek için tıklayın
        </Link>
      </div>
    </Modal>
  );
};

export default SuccessModal;
