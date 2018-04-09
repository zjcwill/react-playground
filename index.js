import React from "react";
import ReactDOM from "react-dom";

import CounterButton from './counterButton';
import UseContext from './useContext';

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<UseContext />, mountNode);