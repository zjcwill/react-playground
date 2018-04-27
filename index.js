import React from "react";
import ReactDOM from "react-dom";

// import CounterButton from './code/counterButton';
// import UseContext from './code/useContext';
// import LifeCycle from './code/lifecycle';
// import Keys from './code/keys';
import Echart from './code/echarts'
class HelloMessage extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<Echart />, mountNode);