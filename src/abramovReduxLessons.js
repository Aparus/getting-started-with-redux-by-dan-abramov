import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './Counter';

// Reducer
export const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    document.querySelectorAll('.counter')[0],
  );
};

store.subscribe(render);
setTimeout(() => render(), 1000);

export const addCounter = list =>
  // return list.concat([0]);
  [...list, 0];
export const removeCounter = (list, index) => list.filter((e, i) => i !== index);
/*
    // alternatives :

    return list
        .slice(0, index)
        .concat(list.slice(index + 1))
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
     */

export const incrementCounter = (list, index) =>
  list.map((elem, i) => {
    if (i === index) elem += 1;
    return elem;
  });
/*
    //alternative:
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ]
     */

export const toggleTodo = todo =>
  // ES7 - object spread
  ({
    ...todo,
    completed: !todo.completed,
  });

export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];
    default:
      return state;
  }
};
