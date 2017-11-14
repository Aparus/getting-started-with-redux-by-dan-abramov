/* import React from 'react';
import ReactDOM from 'react-dom'; */
import { createStore } from 'redux';

export const toggleTodo = todo =>
  // ES7 - object spread
  ({
    ...todo,
    completed: !todo.completed,
  });

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) return state;
      return {
        ...state,
        completed: !state.completed,
      };
    default:
      return state;
  }
};

export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)];
    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

const todoApp = (state = {}, action) => ({
  todos: todos(state.todos, action),
  visibilityFilter: visibilityFilter(state.visibilityFilter, action),
});

const store = createStore(
  todoApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
