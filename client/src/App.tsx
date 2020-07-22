import React from "react";
import "./App.css";
import Keypad, { KeypadButtonLabel } from "./components/Keypad";
import SmsScreen from "./components/SmsScreen";
import SmsSnackBar from "./components/SmsSnackBar";

type State = {
  smsInput: string;
  messageList: Message[];
  appError: AppError;
};

type AppError = {
  error: boolean;
  info: string;
};

type Props = {};

export type Message = {
  id: number;
  message: string;
  sentBy: 0 | 1; // 0 means message sent by user and 1 means message came from server or saviour
  status: 0 | 1 | 2;
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
class App extends React.Component<Props, State> {
  readonly state: State = {
    smsInput: "",
    appError: {
      error: false,
      info: "",
    },
    messageList: [],
  };
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
    let match = sms.match(/(0 )[0-9]\w+/g);
    if (match && match.length > 0) {
      let output: string = match.join("").toString();
      return output === sms;
    }
    return false;
  };

  handleSendBtn = async (): Promise<any> => {
    try {
      const { smsInput, messageList } = this.state;
      if (this.validateSmsCode(smsInput)) {
        let maxId = messageList.reduce(
          (maxId, message) => (message.id > maxId ? message.id : maxId),
          Number.MIN_VALUE
        );
        const newMessage: Message = {
          id: maxId + 1,
          message: smsInput,
          sentBy: 0,
          status: 0,
        };
        this.setState({ messageList: [...messageList, newMessage] });
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
        <Keypad onClick={this.handleKeypadOnClick} />
      </div>
    );
  }
}

export default App;
