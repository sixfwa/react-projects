import React, { Component } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import './App.css';

class App extends Component {

  state = {
    username : "Farhan"
  }

  nameChangeHandler = (event) => {
    this.setState ({
      username : event.target.value
    })
  }

  switchNameHandler = (newName) => {
    this.setState({
      username : newName
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, 'COOOOL')}
        >
        Click Me
        </button>
        <UserInput  
        changed={this.nameChangeHandler}
        value={this.state.username}/>

        <UserOutput 
        userName={this.state.username}
        />
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
      </div>
    );
  }
}

export default App;
