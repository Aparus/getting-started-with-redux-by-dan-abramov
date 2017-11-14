import React /* , { Component } */ from 'react';
import logo from './logo.svg';
import './App.css';
// import './lessons-part-1-counter';
import './lessons-part-2-todos';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <div className="counter" />
    <div className="todos" />
  </div>
);

export default App;
