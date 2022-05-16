import React from "react";

export default class Title extends React.PureComponent {
  constructor(props) {
    super(props)
    this.title = props.title
  }
  render() {
    return (
      <h1>{this.title}</h1>
    )
  }
}