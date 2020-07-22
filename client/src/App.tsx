import React from "react";
import "./App.css";
import Keypad, { KeypadButtonLabel } from "./components/Keypad";
import SmsScreen from "./components/SmsScreen";

type State = {
  smsInput: string;
  inputSequence: KeypadButtonLabel[];
};

type Props = {};

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
    inputSequence: [],
  };
  handleKeypadOnClick = (buttonLabel: KeypadButtonLabel) => {
    this.setState({
      smsInput:
        buttonLabel.label === "*"
          ? ""
          : this.state.smsInput + getLabel(buttonLabel.label),
      inputSequence: [...this.state.inputSequence, buttonLabel],
    });
  };
  render() {
    return (
      <div className="App">
        <SmsScreen smsInput={this.state.smsInput} />
        <Keypad onClick={this.handleKeypadOnClick} />
      </div>
    );
  }
}

export default App;
