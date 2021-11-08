import React from "react";
import "./css/App.css";
import { BiExit } from "react-icons/bi";

function ExitModalButton({ setModalState }) {
  return (
    <BiExit
      className="modal-exit"
      onClick={() => {
        setModalState(false);
      }}
    />
  );
}

export { ExitModalButton };
