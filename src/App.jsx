import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './todo/store';
import TodoApp from './todo/components/TodoApp';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React and redux</h1>
    </header>
    <Provider store={store}>
      <TodoApp />
    </Provider>,
  </div>
);

export default App;
