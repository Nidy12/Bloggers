import PropTypes from "prop-types";
import "./Modal.css";

const Modal = ({ showModal, handleClose }) => {
  return (
    <div className={`modal ${showModal ? "show" : ""}`} id="popup-modal">
      <div className="modal-content">
        <button type="button" className="close-button" onClick={handleClose}>
          <svg
            className="close-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
        <div className="modal-body">
          <svg
            className="modal-icon"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h3 className="modal-title">
            Are you sure you want to delete this product?
          </h3>
          <button type="button" className="confirm-button">
            Yes, Im sure
          </button>
          <button type="button" className="cancel-button" onClick={handleClose}>
            No, cancel
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Modal;
