import React from "react";
import "./App.css";
import Keypad, { KeypadButtonLabel } from "./components/Keypad";

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
        <Keypad onClick={this.handleKeypadOnClick} />
      </div>
    );
  }
}

export default App;
