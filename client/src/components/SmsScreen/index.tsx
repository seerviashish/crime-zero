import React, { CSSProperties } from "react";
import "./style.css";
import { url } from "inspector";

type Props = {
  style?: CSSProperties;
};

const SmsScreen: React.FC<Props> = ({ style }) => {
  return (
    <div className="SmsScreen" style={{ ...style }}>
      <div className="SmsInputField">
        <input className="SmsInputBox" type="text" />
        <button className="SendBtn"></button>
      </div>
    </div>
  );
};

export default SmsScreen;
