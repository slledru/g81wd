import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const ParamsExample = () => (
  <Router>
    <div>
      <Link to="/netflix">Netflix</Link><br/>
      <Link to="/foo/123">Foo?</Link><br/>
      <Route path="/foo/:id" component={Bar}/>
    </div>
  </Router>
)

const Bar = ({ match }) => (
  <div className="Bar">Bar Component<h3>ID: {match.params.id}</h3></div>
)

export default ParamsExample;
