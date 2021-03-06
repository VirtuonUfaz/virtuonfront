import "./styles.scss";

const Modal = ({ children, show, setShow }) => {
  return (
    <div className={show ? "modal" : "modal hidden"}>
      <div className="modal-content border rounded">
        <div className="close-btn" onClick={() => setShow(false)}>
          x
        </div>
        <div className="modal-container">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
