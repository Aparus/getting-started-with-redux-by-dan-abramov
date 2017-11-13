import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

//Reducer
export const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(counter)

const Counter = ({
    value, 
    onIncrement, 
    onDecrement
    }) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
)

const render = () => {
    ReactDOM.render(
        <Counter
            value={ store.getState() }
            onIncrement={ ()=> store.dispatch({type:'INCREMENT'}) }
            onDecrement={ ()=> store.dispatch({type:'DECREMENT'}) }
        />, 
        document.querySelectorAll('.counter')[0]
    )
}

store.subscribe(render);
setTimeout( () => render(), 1000);

export const addCounter = (list) => {
    //return list.concat([0]);
    return [...list, 0]
}

export const removeCounter = (list, index) => {
    return list.filter( (e, i) => {
        return i !== index
    })
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
}

export const incrementCounter = (list, index) => {
    return list.map( (elem, i) => {
        if ( i==index ) elem ++ 
        return elem
    })
/* 
    //alternative: 
    return [
        ...list.slice(0, index), 
        list[index] + 1, 
        ...list.slice(index + 1)
    ]
     */
}