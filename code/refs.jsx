import React, { Component } from "react";
import remarkable from 'remarkable';

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Type some *markdown* here!"
    };
    this.rawMarkup = this.rawMarkup.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.setState({ value: this.refs.textarea.value });
  }
  rawMarkup(){
      const md = new remarkable();
      return {__html:md.render(this.state.value)}
  }
  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          ref="textarea"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div 
            dangerouslySetInnerHTML={this.rawMarkup()}/>
      </div>
    );
  }
}

export default MarkdownEditor;
