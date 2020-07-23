import React, { CSSProperties, useEffect, useRef } from "react";
import Done from "../../assets/done-24px.svg";
import DoneAll from "../../assets/done_all-24px.svg";
import SmsError from "../../assets/error-24px.svg";
import { Message } from "../../App";

import "./style.css";

type Props = {
  style?: CSSProperties;
  smsInput: string;
  messageList: Message[];
  sendBtn: () => Promise<any>;
};

const SmsScreen: React.FC<Props> = ({
  style,
  smsInput,
  messageList,
  sendBtn,
}) => {
  const smsListViewRef = useRef<HTMLLIElement>(null);
  useEffect(() => {
    if (smsListViewRef && smsListViewRef.current) {
      smsListViewRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [messageList]);
  return (
    <div className="SmsScreen" style={{ ...style }}>
      <div className="SmsListView">
        <ul>
          {messageList.map((message, index) => {
            return (
              <li
                ref={smsListViewRef}
                key={`${message.id}-${index}-msg`}
                style={{
                  float: message.sentBy === 0 ? "right" : "left",
                  clear: message.sentBy === 0 ? "right" : "left",
                  width: "50%",
                  borderRadius:
                    message.sentBy === 0
                      ? "25px 25px 0px 25px"
                      : "25px 25px 25px 0",
                  backgroundColor: message.sentBy === 0 ? "#4b4b4b" : "#bcbcbc",
                  color: message.sentBy === 0 ? "#FFFFFF" : "#4B4B4B",
                  border: message.sentBy === 0 ? "none" : "1px solid #707070",
                }}
              >
                <span className="SmsText">{message.message}</span>
                {message.status === 0 && message.sentBy === 0 && (
                  <img className="SmsIcon" src={Done} alt="sent" />
                )}
                {message.status === 1 && message.sentBy === 0 && (
                  <img className="SmsIcon" src={DoneAll} alt="recieved" />
                )}
                {message.status === 2 && message.sentBy === 0 && (
                  <img className="SmsIcon" src={SmsError} alt="sent error" />
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="SmsInputField">
        <textarea
          className="SmsInputBox"
          rows={5}
          value={smsInput}
          readOnly
        ></textarea>
        <button className="SendBtn" onClick={sendBtn}></button>
      </div>
    </div>
  );
};

export default SmsScreen;
