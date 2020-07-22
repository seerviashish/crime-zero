import React from "react";
import "./App.css";
import Keypad, { KeypadButtonLabel } from "./components/Keypad";
import SmsScreen from "./components/SmsScreen";

type State = {
  smsInput: string;
};

type Props = {};
class App extends React.Component<Props, State> {
  readonly state: State = {
    smsInput: "",
  };
  handleKeypadOnClick = (buttonLabel: KeypadButtonLabel) => {
    console.log(buttonLabel);
  };
  render() {
    return (
      <div className="App">
        <SmsScreen />
        <Keypad onClick={this.handleKeypadOnClick} />
      </div>
    );
  }
}

export default App;
