import React, { Component } from "react";

const style = { fontSize: "40px", width: "100px", margin: "0 auto" };
class Cards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: null
    };
  }
  componentDidMount() {
    if (!this.state.from) {
      this.setState({ from: this.props.from });
    }

    this.timer = setInterval(() => this.grow(), 5);
  }

  grow() {
      if(this.state.from<100){
        this.setState({ from: this.state.from + 1 });
      } else {
          clearInterval(this.timer)
      }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <p style={style}>{this.state.from}</p>
      </div>
    );
  }
}

export default Cards;
