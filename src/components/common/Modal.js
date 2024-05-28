import React from "react";
import "./Modal.css";
function Modal({ isOpen, title, content, onCancel, onConfirm }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal" style={{ display: "block" }}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
        </div>
        <div className="modal-body">
          <p className="modal-text">{content}</p>
        </div>
        <div className="modal-footer">
          <button className="btn cancel" onClick={onCancel}>
            취소
          </button>
          <button className="btn confirm" onClick={onConfirm}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
