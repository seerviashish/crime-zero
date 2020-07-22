import React from "react";
import "./style.css";

type Props = {
  message: string;
  onClose: () => void;
};

const SmsSnackBar: React.FC<Props> = ({ message, onClose }) => {
  return (
    <div key={`snackbar`} className="Snackbar">
      <span>{message}</span>
      <button
        className="SnackBtn"
        onClick={() => {
          onClose();
        }}
      ></button>
    </div>
  );
};
export default SmsSnackBar;
