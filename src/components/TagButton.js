import React, { Component } from "react";
import "./TagButton.css";

class TagButton extends Component {
  render() {
    return (
      <button
        id="roundButton"
        onMouseDown={this.props.handleMouseDown}
      ></button>
    );
  }
}

export default TagButton;
