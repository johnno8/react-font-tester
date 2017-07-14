import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React Font Tester</h1>
        <GetInput
            className="GetInput"
            type="text"
            input={this.state.inputValue}
            handleInput={this.handleChange} />
        <div className="HeadingDiv">
          <h3>See it in different fonts here</h3>
        </div>
        <Font
            font="Courier New"
            input={this.state.inputValue} />
        <Font
            font="Arial"
            input={this.state.inputValue} />
        <Font
            font="Arial Black"
            input={this.state.inputValue} />
        <Font
            font="Times New Roman"
            input={this.state.inputValue} />
        <Font
            font="Georgia"
            input={this.state.inputValue} />
        <Font
            font="Comic Sans MS"
            input={this.state.inputValue} />
      </div>
    )
  }
}

class GetInput extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <div className="HeadingDiv">
          <h3>Type your text here</h3>
        </div>
        <div>
          <input
              className="Input"
              value={this.props.input}
              onChange={this.props.handleInput}/>
        </div>
      </div>
    )
  }
}

class Font extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const style = {
      fontFamily: this.props.font,
    }
    return(
        <div className="TextBox">
          <div className="FontName">{this.props.font}</div>
          <div className="FontText" style={style}>{this.props.input}</div>
        </div>
    )
  }

}

export default App
