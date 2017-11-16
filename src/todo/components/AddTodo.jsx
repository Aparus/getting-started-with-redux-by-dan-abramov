import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

/* AddTodo не совсем контейнер, он просто вызывает диспатч,
  ему не нужен стор, поэтому мы можем создать коннект коротким путем:
  AddTodo = connect()(AddTodo); */
let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <input
        ref={(node) => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
        }}
      >
        Add Todo
      </button>
    </div>
  );
};
AddTodo = connect()(AddTodo);

export default AddTodo;
