import React, { Component } from 'react';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';
import './App.css';

class App extends Component {
  state = {
    inputText : ''
  }

  inputListener = (event) => {
    this.setState({
      inputText : event.target.value
    })
  }

  deleteLetterHandler = (letterIndex) => {
    const inputSplit = this.state.inputText.split('');
    inputSplit.splice(letterIndex, 1);
    const newInput = inputSplit.join('');
    this.setState({inputText : newInput})
  }

  render() {
    const charList = this.state.inputText.split('').map((ch, index) => {
      return <CharComponent 
              letter={ch}
              click={() => this.deleteLetterHandler(index)}
              />
    });

    return (
      <div className="App">
        <input type="text" onChange={(event) => this.inputListener(event)}
        value={this.state.inputText}/>
        <p>{this.state.inputText.length}</p>
        <ValidationComponent size={this.state.inputText.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
