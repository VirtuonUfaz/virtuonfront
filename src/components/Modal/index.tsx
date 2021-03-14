import "./styles.scss";

const Modal = ({ children, show }) => {
  return (
    <div className={show ? "modal" : "modal hidden"}>
      <div className="modal-content border rounded">
        <div className="modal-container">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
