import React, { Component } from 'react'

export default class OutputResult extends Component {
  render() {
    return (
      <div className="display-result">
        <div className="result">{ this.props.value }</div>
      </div>
    )
  }
}
