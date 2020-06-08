import React, { Component } from 'react'
import Button from './Button'

export default class ButtonPanel extends Component {
  handleClick = buttonName => {
    this.props.handleClick(buttonName)
  }
  render() {
    return (
      <div className="component-button-panel">
        <div className="row-button">
          <Button name="AC" handleClick={ this.handleClick }></Button>
          <Button name="+/-" handleClick={ this.handleClick }></Button>
          <Button name="%" handleClick={ this.handleClick }></Button>
          <Button name="÷" calculation handleClick={ this.handleClick }></Button>
        </div>

        <div className="row-button">
          <Button name="7" handleClick={ this.handleClick }></Button>
          <Button name="8" handleClick={ this.handleClick }></Button>
          <Button name="9" handleClick={ this.handleClick }></Button>
          <Button name="x" calculation handleClick={ this.handleClick }></Button>
        </div>

        <div className="row-button">
          <Button name="4" handleClick={ this.handleClick }></Button>
          <Button name="5" handleClick={ this.handleClick }></Button>
          <Button name="6" handleClick={ this.handleClick }></Button>
          <Button name="-" calculation handleClick={ this.handleClick }></Button>
        </div>

        <div className="row-button">
          <Button name="1" handleClick={ this.handleClick }></Button>
          <Button name="2" handleClick={ this.handleClick }></Button>
          <Button name="3" handleClick={ this.handleClick }></Button>
          <Button name="+" calculation handleClick={ this.handleClick }></Button>
        </div>

        <div className="row-button">
          <Button name="0" wide handleClick={ this.handleClick }></Button>
          <Button name="." handleClick={ this.handleClick }></Button>
          <Button name="=" calculation handleClick={ this.handleClick }></Button>
        </div>
      </div>

    )
  }
}
