import React, { Component } from 'react';
import './App.css';
import ButtonPanel from './ButtonPanel'
import OutputResult from './OutputResult'
import calculate from '../logic/calculate';
class App extends Component {
  state = {
    prevNumber: null,
    nextNumber: null,
    operation: null
  }
  handleClick = (buttonName) => {
    this.setState(calculate(this.state, buttonName))
  }
  render() {
    return (
      <div className="App ">
        <div className="container">
          <OutputResult value={ this.state.nextNumber || this.state.prevNumber || 0 } />
          <ButtonPanel handleClick={ this.handleClick } />
        </div>
      </div>
    );
  }
}
export default App;
