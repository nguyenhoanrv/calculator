import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    const className = [
      "component-button",
      this.props.calculation ? "calculation" : "",
      this.props.wide ? "wide" : ""
    ]
    return (
      <div className={ className.join(" ").trim() }>
        <button onClick={ () => this.props.handleClick(this.props.name) }>{ this.props.name }</button>
      </div >
    )
  }
}
