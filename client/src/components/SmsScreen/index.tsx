import React, { CSSProperties } from "react";
import Done from "../../assets/done-24px.svg";
import DoneAll from "../../assets/done_all-24px.svg";
import SmsError from "../../assets/error-24px.svg";

import "./style.css";

type Props = {
  style?: CSSProperties;
  smsInput: string;
};

const SmsScreen: React.FC<Props> = ({ style, smsInput }) => {
  return (
    <div className="SmsScreen" style={{ ...style }}>
      <div className="SmsListView">
        <ul>
          <li>
            <span className="SmsText">sda</span>
            <img className="SmsIcon" src={Done} />
            <img className="SmsIcon" src={DoneAll} />
            <img className="SmsIcon" src={SmsError} />
          </li>
        </ul>
      </div>
      <div className="SmsInputField">
        <textarea
          className="SmsInputBox"
          rows={5}
          value={smsInput}
          readOnly
        ></textarea>
        <button className="SendBtn"></button>
      </div>
    </div>
  );
};

export default SmsScreen;
