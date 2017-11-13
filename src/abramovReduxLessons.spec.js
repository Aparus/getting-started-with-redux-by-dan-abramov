import { counter, addCounter, removeCounter, 
    incrementCounter, toggleTodo } from './abramovReduxLessons'
import deepFreeze  from 'deep-freeze'
test('Counter reducer ', () => {
    expect(counter(0, { type: 'INCREMENT' })).toBe(1)
    expect(counter(1, { type: 'INCREMENT' })).toBe(2)
    expect(counter(2, { type: 'DECREMENT' })).toBe(1)
    expect(counter(0, { type: 'DECREMENT' })).toBe(-1)
    expect(counter(undefined, {})).toBe(0)
});

test('addCounter immutable ', () => {

    const listBefore = []
    const listAfter = [0]

    deepFreeze(listBefore)

    expect( addCounter(listBefore)).toEqual(listAfter) 

});

test('removeCounter immutable', () => {
    const listBefore = [0, 10, 20, 30, 40]
    const listAfter = [0, 10, 20, 40]
    deepFreeze(listBefore)

    expect( removeCounter(listBefore, 3)).toEqual(listAfter) 
})

test('testIncrementCounter immutable', () => {
    const listBefore = [0, 10, 20]
    const listAfter = [0, 11, 20]
    deepFreeze(listBefore)

    expect( incrementCounter(listBefore, 1)).toEqual(listAfter) 
})

test('testToggleTodo immutable', () => {
    const todoBefore = {
        id: 0, 
        text: 'Learn Redux', 
        completed: false
    }
    const todoAfter = {
        id: 0, 
        text: 'Learn Redux', 
        completed: true
    }

    deepFreeze(todoBefore)

    expect( toggleTodo(todoBefore)).toEqual(todoAfter) 
})