import { XMarkIcon } from "@heroicons/react/20/solid";
import React from "react";
import Button from "./Button";
import "./ui.scss";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  modalTitle: string;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  children,
  modalTitle,
}) => {
  return (
    <div
      onClick={onClose}
      className={`modal-wrapper fixed inset-0 flex items-center z-50  justify-center transition-colors 
        ${open ? "visible bg-black/60" : "invisible"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`modal-content bg-white rounded-xl shadow px-5 py-4 transition-all 
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <Button
          content=""
          onClick={onClose}
          rightIcon={<XMarkIcon className="h-7 w-7" />}
          className="modalCloseBtn"
        />

        <h2 className="modal-title">{modalTitle}</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
