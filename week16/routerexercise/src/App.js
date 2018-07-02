import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom'

const checkActive = (match, location) => {
  console.log('checkActive', match, location)
  return true
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink
          to='/home'
          activeClassName="active"
          isActive={ checkActive }
        >Home</NavLink>
        <NavLink
          to='/contact'
          activeClassName="active"
          activeStyle={{ color: 'red' }}
        >Contact</NavLink>
      </div>
    );
  }
}

export default App;
