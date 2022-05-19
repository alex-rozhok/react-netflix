import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.children = props.children;
    this.onClick = props.onClick
    this.type = props.type ?? 'button'
  }

  render() {
    return (
      <button
        onClick={this.onClick}
        type={this.type}
      >
        {this.children}
      </button>
    )
  }
}