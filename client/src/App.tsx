import React from "react";
import "./App.css";
import Keypad, { KeypadButtonLabel } from "./components/Keypad";
import SmsScreen from "./components/SmsScreen";
import SmsSnackBar from "./components/SmsSnackBar";

type State = {
  smsInput: string;
  messageList: Message[];
  appError: AppError;
  isTouchDevice: boolean;
};

type AppError = {
  error: boolean;
  info: string;
};

type Props = {};

export type Message = {
  id: number;
  message: string;
  sentBy: number; // 0 means message sent by user and 1 means message came from server or saviour
  status: number;
  /* 
    status 0: message sent
    status 1: message recieved
    status 3: message error
   */
};

// Message list state is in memory once page refresh all messages will be cleared.

const getLabel = (label: string): string => {
  if (label === "#") {
    return " ";
  }
  if (label === "*") {
    return "";
  }
  return label;
};

const isTouchDevice = (): boolean => {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
};

class App extends React.Component<Props, State> {
  readonly state: State = {
    smsInput: "",
    appError: {
      error: false,
      info: "",
    },
    messageList: [],
    isTouchDevice: false,
  };

  componentDidMount() {
    this.setState({ isTouchDevice: isTouchDevice() });
  }
  handleKeypadOnClick = (buttonLabel: KeypadButtonLabel) => {
    this.setState({
      smsInput:
        buttonLabel.label === "*"
          ? ""
          : this.state.smsInput + getLabel(buttonLabel.label),
    });
  };

  handleErrorClear = () => {
    this.setState({ appError: { error: false, info: "" } });
  };

  validateSmsCode = (sms: string): boolean => {
    let match = sms.match(/(0 )[2-9]+/g);
    if (match && match.length > 0) {
      let output: string = match.join("").toString();
      return output === sms;
    }
    return false;
  };

  getMaxId = (messageList: Message[]): number => {
    return messageList.reduce(
      (maxId, message) => (message.id > maxId ? message.id : maxId),
      0
    );
  };

  handleSendBtn = async (): Promise<any> => {
    try {
      const { smsInput, messageList } = this.state;
      if (this.validateSmsCode(smsInput)) {
        let maxId = this.getMaxId(messageList);
        const newMessage: Message = {
          id: maxId + 1,
          message: smsInput,
          sentBy: 0,
          status: 0,
        };
        this.setState({ messageList: [...messageList, newMessage] });
        const heroResponse = await fetch(
          `http://localhost:3005/hero?code=${smsInput}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-client-id": "crimehero123",
            },
          }
        );
        const heroJson = await heroResponse.json();
        if (heroResponse.ok) {
          if (!heroJson || (heroJson && !heroJson.hero)) {
            throw new Error("No hero found");
          }
          const heroMessage = {
            id: maxId + 2,
            message: heroJson.hero,
            sentBy: 1,
            status: 1,
          };
          this.setState({
            messageList: [...this.state.messageList, heroMessage],
          });
        } else {
          throw new Error(
            heroJson && heroJson.error ? heroJson.error : "Response Error"
          );
        }
      } else {
        throw new Error("Please sent correct code.");
      }
    } catch (error) {
      this.setState({
        appError: {
          error: true,
          info: String(error),
        },
      });
    }
  };
  render() {
    const { smsInput, messageList, appError } = this.state;
    return (
      <div className="App">
        <SmsScreen
          smsInput={smsInput}
          messageList={messageList}
          sendBtn={this.handleSendBtn}
        />
        {appError.error && (
          <SmsSnackBar
            message={appError.info}
            onClose={this.handleErrorClear}
          />
        )}
        <Keypad
          onClick={this.handleKeypadOnClick}
          isTouchDevice={this.state.isTouchDevice}
        />
      </div>
    );
  }
}

export default App;
