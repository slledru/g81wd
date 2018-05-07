import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pete from './pete-component'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Craig',
      greeting: 'Ola'
    }
  }

  onGreetingChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({...this.state, greeting: event.target.value })
  }

  onNameChange = (event) => {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({...this.state, name: event.target.value })
  }

  render() {
    return (
      <div className="App">
        <form>
          <div>
            <label>Greeting: </label>
            <input onChange={this.onGreetingChange}/>
          </div>
          <div>
            <label>Name: </label>
            <input onChange={this.onNameChange}/>
          </div>
        </form>
        <Pete name={this.state.name} greeting={this.state.greeting}/>
      </div>
    );
  }
}

export default App;
