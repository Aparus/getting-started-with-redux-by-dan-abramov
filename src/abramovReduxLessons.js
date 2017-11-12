import { createStore } from 'redux'

//reducer 
export const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state;
    }
}


const store = createStore(counter)
/* 
console.log(store.getState())

store.dispatch({type: 'INCREMENT'})

console.log(store.getState())
 */

const render = () => {
    document.querySelectorAll('.counter')[0].innerText = store.getState();    
}

store.subscribe(render)

setTimeout(()=>render(), 0)

document.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'})
})