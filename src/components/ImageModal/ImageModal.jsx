import Modal from 'react-modal';
import css from "./ImageModal.module.css"

Modal.setAppElement('#root');
export default function ImageModal({modalIsOpen, closeModal, modalPhoto}) {
    
    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className={css.Modal}
            overlayClassName={css.Overlay}
            >
            <img src={modalPhoto.urls.regular} alt={modalPhoto.alt_description} className={css.img } />
        </Modal>
    )
}