import React from "react";
import ReactDOM from "react-dom";

import CounterButton from './code/counterButton';
import UseContext from './code/useContext';
import LifeCycle from './code/lifecycle';
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<LifeCycle />, mountNode);