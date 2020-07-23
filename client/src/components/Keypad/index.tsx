import React, { CSSProperties } from "react";
import clsx from "clsx";
import "./style.css";

type Props = {
  onClick: (buttonLabel: KeypadButtonLabel) => void;
  style?: CSSProperties;
  isTouchDevice: boolean;
};

export type KeypadButtonLabel = {
  label: string;
  text: string;
};

const keypadButtons: KeypadButtonLabel[] = [
  {
    label: "1",
    text: "@.?",
  },
  {
    label: "2",
    text: "ABC",
  },
  {
    label: "3",
    text: "DEF",
  },
  {
    label: "4",
    text: "GHI",
  },
  {
    label: "5",
    text: "JKL",
  },
  {
    label: "6",
    text: "MNO",
  },
  {
    label: "7",
    text: "PQRS",
  },
  {
    label: "8",
    text: "TUV",
  },
  {
    label: "9",
    text: "WXYZ",
  },
  {
    label: "*",
    text: "Clear",
  },
  {
    label: "0",
    text: "Zero",
  },
  {
    label: "#",
    text: "Space",
  },
];

const Keypad: React.FC<Props> = ({ onClick, style, isTouchDevice }) => {
  return (
    <div className={"Keypad"} style={{ ...style }}>
      <div className="KeypadBtnContainer">
        {keypadButtons.map((keyLabel, index) => (
          <button
            key={`${index}-key`}
            className={isTouchDevice ? "KeypadBtn" : "KeypadHoverBtn"}
            onClick={(e) => {
              onClick(keyLabel);
            }}
          >
            <p key="key-label" className="KeyLabel">
              {keyLabel.label}
            </p>
            <p key="key-text" className="KeyText">
              {keyLabel.text}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keypad;
