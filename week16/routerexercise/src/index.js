import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom'

const Home = (props) => {
  console.log(props)
  return <h1>Home</h1>
}
ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route component={ App }/>
      <Route path='/home' component={ Home }/>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
)
